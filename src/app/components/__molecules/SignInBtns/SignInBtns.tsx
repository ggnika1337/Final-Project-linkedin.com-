import React from "react";

function SignInBtns() {
  return (
    <>
      <div className="pl-14 pr-7 max-md:pr-0 max-md:pl-0 flex flex-col items-start">
        <h1 className="font-[400] text-[48px] max-md:text-[32px] max-w-[572px]">
          Welcome to your <br /> professional community
        </h1>
        <div className="flex flex-col gap-3 mt-7">
          <button className="w-[400px] h-[40px] bg-[#1a73e9] rounded-[20px] text-white hover:opacity-50">
            Continue with Google
          </button>
          <button className="w-[400px] h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black">
            Continue with Microsoft
          </button>
          <button className="w-[400px] h-[40px] bg-white rounded-[20px] border-[1px] border-black text-black">
            Sign in
          </button>
        </div>
        <div class="text-center text-sm text-gray-500 leading-relaxed py-4">
          By clicking Continue to join or sign in, you agree to LinkedIn's
          <br />
          <a href="#" class="text-[#8344cc] hover:underline">
            User Agreement
          </a>
          ,
          <a href="#" class="text-[#0a66c2] hover:underline">
            Privacy Policy
          </a>
          , and .
          <a href="#" class="text-[#0a66c2] hover:underline">
            Cookie Policy
          </a>
          .
        </div>
      </div>
    </>
  );
}

export default SignInBtns;
