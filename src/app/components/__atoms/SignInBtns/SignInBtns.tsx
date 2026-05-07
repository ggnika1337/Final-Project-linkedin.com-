import React from "react";
import Google from "../../../../../public/start/GoogleLogo.png";
import Microsoft from "../../../../../public/start/MicrosoftLogo.png";
import Image from "next/image";
import Agreement from "../Agreement/Agreement";
import { useRouter } from "next/navigation";
import { GoogleSignIn } from "@/app/hooks/Auth";

function SignInBtns() {
  const router = useRouter();
  return (
    <>
      <div className="px-5 max-md:pr-0 flex flex-col items-start max-md:w-full">
        <h1 className="font-[400] text-[48px] max-md:text-[28px] max-w-[572px] self-center whitespace-normal">
          Welcome to your <br className="max-md:hidden" /> professional
          community
        </h1>
        <div className="flex flex-col gap-3 mt-7 w-full pr-7">
          <button
            onClick={GoogleSignIn}
            className="max-w-[400px] cursor-pointer w-full h-[40px] bg-[#1a73e9] rounded-[20px] text-white hover:opacity-50 flex items-center justify-center gap-3 font-[500]"
          >
            <Image width={38} src={Google} alt="Google Logo" /> Continue with
            Google
          </button>
          <button className="max-w-[400px] cursor-pointer w-full h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black flex items-center justify-center gap-3 font-[500]">
            <Image width={20} src={Microsoft} alt="Microsoft Logo" /> Continue
            with Microsoft
          </button>
          <button
            onClick={() => router.push("/sign-in")}
            className="max-w-[400px] cursor-pointer w-full h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black flex items-center justify-center gap-3 font-[500]"
          >
            Sign in with email
          </button>
        </div>
        <Agreement />
      </div>
    </>
  );
}

export default React.memo(SignInBtns);
