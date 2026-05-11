import Image from "next/image";
import Banner from "../../../../../public/feed/banner.png";
import { auth } from "@/config/firebase";
import Pfp from "../Pfp/Pfp";
import { useRouter } from "next/navigation";

type props = {
  location: string;
};

function ProfileCard() {
  let Router = useRouter();
  return (
    <>
      <div className="rounded-[10px] relative bg-[#fefeff] shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
        <Image
          src={Banner}
          alt={"background banner"}
          className="w-full rounded-t-[10px]"
        />
        <Pfp size="72" plusSize={34} />
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
          <button className="bg-[#f4f2ee] border-dashed border-1 rounded-[5px] text-start px-1 text-[#56687A] font-[600] mt-3">
            + Experience
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
