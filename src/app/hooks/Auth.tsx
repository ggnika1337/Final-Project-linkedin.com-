import { sendEmailVerification, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { formTypes } from "@/app/helpers/Props/Props";
import { signOut } from "firebase/auth";
import { createUserProfile } from "@/lib/profile";

export async function GoogleSignIn(router: any) {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
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
  console.log("logout called");
  try {
    await signOut(auth);
    console.log("signed out");
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
