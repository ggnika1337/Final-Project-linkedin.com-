import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { formTypes } from "@/app/Datas/Props/Props";

export async function GoogleSignIn() {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
  return <></>;
}

export async function EmailPassword(
  { email, password, firstName, lastName }: formTypes,
  router: any,
) {
  const Router = useRouter();
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, {
      displayName: `${firstName} ${lastName}`,
    });
    Router.push("/feed");
  } catch (error) {
    console.error(error);
  }
}
