import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

export function CheckAuth() {
  const [done, setDone] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/feed");
      } else {
        router.push("/");
      }
      setDone(true);
    });
  }, []);
  return done;
}
