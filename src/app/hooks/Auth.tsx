import { sendEmailVerification, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { formTypes } from "@/app/helpers/Props/Props";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useRouter } from "next/navigation";

export async function createUserProfile(
  uid: string,
  displayName: string,
  email: string,
) {
  await setDoc(doc(db, "profiles", uid), {
    uid,
    displayName,
    email,
    bio: "",
    photoURL: "",
    bannerURL: "",
  });
}

export async function EmailPassword(
  { email, password, firstName, lastName }: formTypes,
  router: any,
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, {
      displayName: `${firstName} ${lastName}`,
    });
    await sendEmailVerification(user.user);
    await createUserProfile(user.user.uid, `${firstName} ${lastName}`, email);
    router.push("/feed");
  } catch (error) {
    console.error(error);
  }
}

export async function logout(router: any) {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export async function resendVerification() {
  if (!auth.currentUser) return;
  await sendEmailVerification(auth.currentUser);
  return;
}

export async function GoogleSignIn(router: any) {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
}
