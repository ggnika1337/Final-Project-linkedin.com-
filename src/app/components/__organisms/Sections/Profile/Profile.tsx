"use client";
import Image from "next/image";
import FeedBar from "../../Bar/FeedBar";
import Banner from "@/../public/feed/banner.png";
import Pfp from "@/app/components/__atoms/Pfp/Pfp";
import { auth, db } from "@/config/firebase";
import { useEffect, useState } from "react";
import Loading from "@/app/components/__atoms/Loading/Loading";
import { OutsideClick } from "@/app/hooks/OutsideClick";
import ContactPopup from "@/app/components/__molecules/ContactPopup/ContactPopup";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { uploadImage } from "@/app/hooks/CloudinaryUpload";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import Post from "@/app/components/__molecules/Post/Post";

function Profile() {
  let Router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [contact, setContact] = useState(false);
  const contactRef = OutsideClick(() => setContact(false));
  const [users, setUsers] = useState<any[]>([]);
  const [editPopup, setEditPopup] = useState(false);
  const editRef = OutsideClick(() => setEditPopup(false));
  const DarkMode = useDarkMode();

  const { uid } = useParams();
  const profileId = uid as string;
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
    const fetchProfile = async () => {
      const docRef = doc(db, "profiles", profileId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, [profileId]);
  const isOwner = auth.currentUser?.uid === profileId;
  const [editData, setEditData] = useState({ displayName: "", bio: "" });

  useEffect(() => {
    if (profile) {
      setEditData({ displayName: profile.displayName, bio: profile.bio });
    }
  }, [profile]);

  const saveProfile = async () => {
    await setDoc(doc(db, "profiles", uid as string), {
      uid: profile.uid,
      displayName: editData.displayName,
      email: profile.email,
      bio: editData.bio,
      photoURL: profile.photoURL,
      bannerURL: profile.bannerURL,
    });
    setProfile((prev: any) => ({
      uid: prev.uid,
      displayName: editData.displayName,
      email: prev.email,
      bio: editData.bio,
      photoURL: prev.photoURL,
      bannerURL: prev.bannerURL,
    }));
    setEditPopup(false);
  };

  useEffect(() => {
    async function fetchUserPosts() {
      const quer = query(
        collection(db, "posts"),
        where("authorId", "==", profileId),
      );
      const snap = await getDocs(quer);
      const postsList = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    }
    fetchUserPosts();
  }, [profileId]);

  useEffect(() => {
    async function fetchUsers() {
      const snap = await getDocs(collection(db, "profiles"));
      const usersList = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    }
    fetchUsers();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <FeedBar />
      {editPopup && (
        <div className="fixed inset-0 z-[800] bg-[#0000008c] flex justify-center items-start pt-20">
          <div
            ref={editRef}
            className={`w-full max-w-[800px] z-[900] ${DarkMode ? "bg-[#1a1e23] text-white" : "bg-white text-black"} rounded-[10px]`}
          >
            <div className="relative w-full flex items-center justify-between py-[7px] pr-[10px] pl-[25px]">
              <h1 className="font-semibold text-[20px]">Edit intro</h1>
              <svg
                onClick={() => setEditPopup(false)}
                fill={`${DarkMode ? "white" : "black"}`}
                className="size-[40px] p-[12px] rounded-full cursor-pointer hover:bg-[#80808023]"
              >
                <path d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
              </svg>
            </div>
            <div className="w-full h-[1px] bg-[#80808030]"></div>
            <div className="flex flex-col p-6">
              <span className="text-[13px] opacity-87">
                * Indicates required
              </span>

              <h1 className="mt-5 font-semibold">Basic info</h1>
              <label className="text-[14px] opacity-90  mb-1">Full Name*</label>
              <input
                type="text"
                value={editData.displayName}
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    displayName: e.target.value,
                  }))
                }
                className="w-full border-1 border-[#ffffffb1] rounded-[5px] px-2"
              />

              <label className="text-[14px] opacity-90 mt-10 mb-1">
                Headline*
              </label>
              <textarea
                value={editData.bio}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, bio: e.target.value }))
                }
                className="border-1 border-[#ffffffb1] min-h-[105px] rounded-[5px] px-2"
              />
            </div>
            <div className="w-full h-[1px] bg-[#80808030]"></div>
            <div className="px-[19px] flex items-end justify-end mt-2 mb-2">
              <button
                onClick={saveProfile}
                className={`rounded-[15px] px-[10px] font-semibold text-[14px] py-1 border-1 border-[#1b70c7] text-[#1b70c7] hover:bg-[#1b71c733] cursor-pointer`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full container max-w-[1128px] mt-6">
        <div className="max-w-[792px] w-full relative">
          <form
            style={{ display: isOwner ? "block" : "none" }}
            className="size-[32px] cursor-pointer rounded-full opacity-70 absolute right-6 z-[200] top-5 hover:opacity-100 flex items-center justify-center bg-white"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const url = await uploadImage(formData);
              await setDoc(doc(db, "profiles", profileId), {
                uid: profile.uid,
                displayName: profile.displayName,
                email: profile.email,
                bio: profile.bio,
                photoURL: profile.photoURL,
                bannerURL: url,
              });
              setProfile((prev: any) => ({ ...prev, bannerURL: url }));
            }}
          >
            <input
              className="hidden"
              type="file"
              name="image"
              accept="image/*"
              required
              id="file-upload"
              onChange={(e) => e.target.form?.requestSubmit()}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer w-full h-full flex items-center justify-center"
            >
              <svg
                width={16}
                height={19}
                className="fill-current text-gray-700"
              >
                <path d="M10 9a2 2 0 1 1-2-2 2 2 0 0 1 2 2m5-2.5V14H1V6.5A2.5 2.5 0 0 1 3.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0 1 15 6.5M11 9a3 3 0 1 0-3 3 3 3 0 0 0 3-3"></path>
              </svg>
            </label>
          </form>
          <svg
            style={{
              display: isOwner ? "block" : "none",
            }}
            className="absolute right-6 top-54 z-200 cursor-pointer"
            fill={`${DarkMode ? "white" : "black"}`}
            width={22}
            height={22}
            onClick={() => setEditPopup(true)}
          >
            <path d="M21.13 2.86a3 3 0 0 0-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 0 0 0-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
          <div
            className={`rounded-[10px] relative ${DarkMode ? "bg-[#1b1e22] text-white" : "bg-[#fefeff]"} shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
          >
            <Image
              width={792}
              height={193}
              src={profile?.bannerURL || Banner}
              alt={"background banner"}
              className="w-full rounded-t-[10px] max-h-[200px] min-h-[190px]"
            />
            <div className="absolute top-25">
              <Pfp
                plusDisplay={isOwner ? "block" : "none"}
                onChange={(e) => e.target.form?.requestSubmit()}
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const url = await uploadImage(formData);
                  await setDoc(doc(db, "profiles", profileId), {
                    uid: profile.uid,
                    displayName: profile.displayName,
                    email: profile.email,
                    bio: profile.bio,
                    photoURL: url,
                    bannerURL: profile.bannerURL,
                  });
                  setProfile((prev: any) => ({ ...prev, photoURL: url }));
                }}
                src={profile?.photoURL}
                size={152}
                plusSize={52}
                tailwind="max-h-[152px]"
                change={() => {}}
              />
            </div>
            <div className="p-4 flex flex-col mt-30">
              <h1 className="text-[25px] font-[500]">{profile?.displayName}</h1>
              <span className="opacity-50">{profile?.bio} --</span>
              <div>
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
          <div className="mt-3">
            {posts.map((post) => (
              <Post
                authorId={post.authorId}
                key={post.id}
                id={post.id}
                text={post.text}
                ago={post.createdAt?.toDate() ?? new Date()}
                user={post.authorName}
                pfp={post.authorPhoto}
                image={post.imageURL}
                likeCount={post.likeCount || 0}
                commentsCount={post.commentsCount || 0}
                like={() => {}}
                comments={() => {}}
                tailwind=""
              />
            ))}
          </div>
        </div>
        <div
          className={`${DarkMode ? "bg-[#1b1e22] text-white" : "bg-[#fefeff] text-black"} flex flex-col gap-2 w-[300px] rounded-[10px] px-4 py-4 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
        >
          <h1>People you may know</h1>
          {users &&
            users
              .filter((user) => user.id !== auth.currentUser?.uid)
              .map((user) => (
                <div
                  onClick={() => Router.push(`${user.id}`)}
                  key={user.id}
                  className="flex items-center gap-3 p-3"
                >
                  <img
                    src={user.photoURL}
                    className="size-[40px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[14px]">
                      {user.displayName}
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
