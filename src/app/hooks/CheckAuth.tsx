import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export function CheckAuth(redirect = true) {
  const [done, setDone] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (redirect) router.push("/feed");
        const docSnap = await getDoc(doc(db, "profiles", user.uid));
        if (docSnap.exists()) setProfile(docSnap.data());
      } else {
        router.push("/");
      }
      setDone(true);
    });
  }, []);

  return { done, profile };
}
