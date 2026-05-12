import Image from "next/image";
import Bar from "./components/__organisms/Bar/Bar";
import Start from "./components/__organisms/Sections/Start/Start";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Start />
      </div>
    </>
  );
}
