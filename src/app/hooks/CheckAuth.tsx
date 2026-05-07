import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

export function CheckAuth() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/feed");
      } else {
        router.push("/");
      }
    });
  }, []);
  return <></>;
}
