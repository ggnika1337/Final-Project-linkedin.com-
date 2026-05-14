import Image from "next/image";
import Banner from "../../../../../public/feed/banner.png";
import { auth } from "@/config/firebase";
import Pfp from "../Pfp/Pfp";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { CheckAuth } from "@/app/hooks/CheckAuth";

type props = {
  location: string;
};

function ProfileCard() {
  let Router = useRouter();
  const DarkMode = useDarkMode();
  const { done, profile } = CheckAuth(false);
  return (
    <>
      <div
        className={`${DarkMode ? "text-white bg-[#1b1e22]" : "text-black bg-[#fefeff]"} rounded-[10px] relative shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
      >
        <Image
          src={Banner}
          alt={"background banner"}
          className="w-full rounded-t-[10px]"
        />
        <Pfp
          size={72}
          tailwind="max-h-[72px]"
          plusSize={34}
          src={profile?.photoURL}
        />
        <div className="p-4 flex flex-col mt-13">
          <h1
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
            className="text-[20px] font-[500] cursor-pointer"
          >
            {auth.currentUser?.displayName}
          </h1>
          <span
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
            className="opacity-50 cursor-pointer"
          >
            --
          </span>
          <span
            onClick={() => Router.push(`/profiles/${auth.currentUser?.uid}`)}
            className="opacity-50 text-[14px] cursor-pointer"
          >
            {"Tbilisi"}
          </span>
          <button
            className={`${DarkMode ? "text-[#84a7ce] bg-[#293136] border-white" : "text-black bg-[#fefeff] border-white"}bg-[#f4f2ee] border-dashed border-1 rounded-[5px] text-start px-1 text-[#56687A] font-[600] mt-3`}
          >
            + Experience
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
