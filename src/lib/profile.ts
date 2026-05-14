import { db, storage } from "@/config/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function createUserProfile(
  uid: string,
  name: string,
  email: string,
) {
  await setDoc(doc(db, "users", uid), {
    uid: uid,
    name: name,
    email: email,
    bio: "",
    photoURL: "",
    createdAt: serverTimestamp(),
  });
}

export async function fetchProfile(uid: string) {
  const snap = await getDoc(doc(db, "users", uid));
  if (snap.exists()) {
    return snap.data();
  } else {
    return null;
  }
}

export async function saveBio(uid: string, bio: string) {
  await updateDoc(doc(db, "users", uid), { bio: bio });
}

export async function updateProfilePhoto(uid: string, file: File) {
  const storageRef = ref(storage, `pfps/${uid}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  await updateDoc(doc(db, "users", uid), { photoURL: url });
  return url;
}
