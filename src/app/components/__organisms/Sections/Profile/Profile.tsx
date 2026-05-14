"use client";
import Image from "next/image";
import FeedBar from "../../Bar/FeedBar";
import Banner from "@/../public/feed/banner.png";
import Pfp from "@/app/components/__atoms/Pfp/Pfp";
import { auth, db, storage } from "@/config/firebase";
import { useState, useRef, useEffect } from "react";
import Loading from "@/app/components/__atoms/Loading/Loading";
import { OutsideClick } from "@/app/hooks/OutsideClick";
import ContactPopup from "@/app/components/__molecules/ContactPopup/ContactPopup";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Profile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [contact, setContact] = useState<boolean>(false);
  const [bio, setBio] = useState<string>("");
  const [editingBio, setEditingBio] = useState<boolean>(false);
  const [bioInput, setBioInput] = useState<string>("");
  const [photoURL, setPhotoURL] = useState<string>("");
  const contactRef = OutsideClick(() => setContact(false));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const DarkMode = useDarkMode();
  const uid = auth.currentUser?.uid;

  useEffect(() => {
    async function fetchProfile() {
      if (!uid) return;
      const snap = await getDoc(doc(db, "users", uid));
      if (snap.exists()) {
        const data = snap.data();
        setBio(data.bio || "");
        setPhotoURL(data.photoURL || "");
      }
      setLoading(false);
    }
    fetchProfile();
  }, [uid]);

  async function handleSaveBio() {
    if (!uid) return;
    await updateDoc(doc(db, "users", uid), { bio: bioInput });
    setBio(bioInput);
    setEditingBio(false);
  }

  async function handlePfpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !uid) return;
    const storageRef = ref(storage, `pfps/${uid}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await updateDoc(doc(db, "users", uid), { photoURL: url });
    setPhotoURL(url);
  }

  if (loading) return <Loading />;

  return (
    <>
      <FeedBar />
      <div className="flex justify-between w-full container max-w-[1128px] mt-6">
        <div className="max-w-[792px] w-full">
          <div
            className={`rounded-[10px] relative ${DarkMode ? "bg-[#1b1e22] text-white" : "bg-[#fefeff]"} shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
          >
            <Image
              src={Banner}
              alt={"background banner"}
              className="w-full rounded-t-[10px]"
            />

            <div
              className="absolute top-25 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Pfp size={152} plusSize={52} photoURL={photoURL} />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePfpChange}
              />
            </div>

            <div className="p-4 flex flex-col mt-30">
              <h1 className="text-[25px] font-[500]">
                {auth.currentUser?.displayName}
              </h1>

              {editingBio ? (
                <div className="flex flex-col gap-2 mt-1">
                  <textarea
                    rows={3}
                    className="border rounded p-2 text-sm resize-none"
                    value={bioInput}
                    onChange={(e) => setBioInput(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveBio}
                      className="text-sm bg-[#0b67c2] text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingBio(false)}
                      className="text-sm opacity-50 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <span
                  className="opacity-50 text-sm mt-1 cursor-pointer hover:opacity-80"
                  onClick={() => {
                    setBioInput(bio);
                    setEditingBio(true);
                  }}
                >
                  {bio || "Add a bio..."}
                </span>
              )}

              <div className="mt-2">
                <span className="opacity-50 text-[14px] text-center">
                  {"Tbilisi, Georgia"} ·
                </span>
                <button
                  onClick={() => setContact((prev) => !prev)}
                  className="ml-2 text-[#0b67c2] hover:underline font-semibold cursor-pointer"
                >
                  Contact Info
                </button>
              </div>

              <div
                className={`fixed inset-0 m-auto transition-all duration-1000 z-[900] w-full px-[15px] flex justify-center items-center ${contact ? "opacity-100 bg-[#0000008c] pointer-events-auto" : "opacity-0 pointer-events-none bg-transparent"}`}
              >
                <div
                  className={`${contact ? "opacity-100 translate-y-[-100px] pointer-events-auto" : "opacity-0 translate-y-[-0px] pointer-events-none"} transition-all duration-1000 w-full h-full flex items-center justify-center`}
                >
                  <ContactPopup
                    onClick={() => setContact((prev) => !prev)}
                    ref={contactRef}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[312px]">123</div>
      </div>
    </>
  );
}

export default Profile;
