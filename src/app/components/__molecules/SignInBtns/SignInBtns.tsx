import React from "react";
import Google from "../../../../../public/start/GoogleLogo.png";
import Microsoft from "../../../../../public/start/MicrosoftLogo.png";
import Image from "next/image";

function SignInBtns() {
  return (
    <>
      <div className="px-5 max-md:pr-0 flex flex-col items-start max-md:w-full">
        <h1 className="font-[400] text-[48px] max-md:text-[28px] max-w-[572px] self-center whitespace-normal text-center">
          Welcome to your <br className="max-md:hidden" /> professional
          community
        </h1>
        <div className="flex flex-col gap-3 mt-7 w-full pr-7">
          id
          <button className="max-w-[400px] w-full h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black flex items-center justify-center gap-3 font-[500]">
            <Image width={20} src={Microsoft} alt="Microsoft Logo" /> Continue
            with Microsoft
          </button>
          <button className="max-w-[400px] w-full h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black flex items-center justify-center gap-3 font-[500]">
            Sign in with email
          </button>
        </div>
        <div className="whitespace-break-spaces text-sm text-gray-500 leading-relaxed py-4 max-w-[500px]">
          <h1>
            By clicking Continue to join or sign in, you agree to LinkedIn’
            <a href="" className="text-[#8344cc] hover:underline">
              s User Agreement
            </a>
            <a href="" className="text-[#0a66c2] hover:underline">
              , Privacy Policy
            </a>
            , and ,
            <a href="" className="text-[#0a66c2] hover:underline">
              Cookie Policy.
            </a>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SignInBtns;
