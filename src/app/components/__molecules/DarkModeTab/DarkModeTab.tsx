"use client";
import Image from "next/image";
import ToggleDarkMode from "../../__atoms/ToggleDarkMode/ToggleDarkMode";
import { useRouter } from "next/navigation";
import Logo from "@/../public/logo small.png";
import DefaultPfp from "@/../public/PfpDefault.png";
import { auth } from "@/config/firebase";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";
function DarkModeTab() {
  let Router = useRouter();
  const DarkMode = useDarkMode();
  const { done, profile } = CheckAuth(false);
  return (
    <>
      <div
        className={`${DarkMode ? "bg-[#000101]" : "bg-[#f3f3ee]"} w-full min-h-screen flex flex-col items-center gap-4`}
      >
        <div
          className={`${DarkMode ? "bg-[#1c2326]" : "bg-[#fefeff]"} w-full flex justify-between items-center px-5 h-[50px] sticky top-0`}
        >
          <button className="cursor-pointer" onClick={() => Router.push("/")}>
            <Image width={33} height={33} src={Logo} alt="linkedin logo" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
          >
            <Image
              src={profile?.photoURL || DefaultPfp}
              alt="PFP"
              width={30}
              height={300}
              className="rounded-full max-h-[30px]"
            />
          </button>
        </div>
        <div className="w-full max-w-[725px] container">
          <ToggleDarkMode backClick={() => Router.push("/settings")} />
        </div>
      </div>
    </>
  );
}

export default DarkModeTab;
