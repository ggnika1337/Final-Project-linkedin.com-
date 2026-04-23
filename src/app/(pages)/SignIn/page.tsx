import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import google from "../../../../public/start/GoogleLogo.png";

function Page() {
  return (
    <>
      <Link href={"./"}>
        <Image
          src={logo}
          width={101}
          alt="linkedin logo"
          className="cursor-pointer min-w-[101px] absolute top-5 left-15"
        />
      </Link>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col bg-white border-1 border-[#e9e8e9] rounded-[10px] p-[30px]">
          <h1 className="text-[34px] font-[500]">Sing in</h1>
          <span className="font-[600] mt-2 flex gap-2">
            New to LinkedIn?
            <a className="text-[#0A66C2]" href="">
              Join now
            </a>
          </span>
          <button className="mt-4 w-full h-[40px] bg-[transparent] border-1 border-gray-500 rounded-[20px] text-black cursor-pointer flex items-center justify-center gap-3 font-[500]">
            <Image src={google} width={27} alt="google logo" /> Continue with
            Google
          </button>
          <div className="whitespace-break-spaces text-sm text-gray-500 leading-relaxed py-4 max-w-[500px]">
            <h1>
              By clicking Continue to join or sign in, you agree to LinkedIn’s
              <a href="" className="text-[#8344cc] hover:underline">
                , User Agreement
              </a>
              <a href="" className="text-[#0a66c2] hover:underline">
                , Privacy Policy
              </a>
              , and
              <a href="" className="text-[#0a66c2] hover:underline">
                , Cookie Policy.
              </a>
            </h1>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <div className="w-full h-[1px] bg-[#e9e8e9]"></div>
            <span className="text-[#6e6d6d] mb-1">or</span>
            <div className="w-full h-[1px] bg-[#e9e8e9]"></div>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <label>Email or phone</label>
              <input
                className="border-1 border-black rounded-[5px] p-[10px]"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label>Password</label>
              <input
                className="border-1 border-black rounded-[5px] p-[10px] mb-3"
                type="password"
              />
            </div>
            <a href="" className="text-[#0a66c2] hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mt-4 flex gap-3">
            <input type="checkbox" className="size-[24px]" />
            <span>Keep me signed in</span>
          </div>
          <button className="mt-4 cursor-pointer rounded-[30px] border-[0px] font-[600] h-[52px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
