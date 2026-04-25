import Agreement from "@/app/components/__atoms/Agreement/Agreement";
import AuthInputs from "@/app/components/__atoms/AuthInputs/AuthInputs";
import LineOr from "@/app/components/__atoms/LineOr/LineOr";
import Policies from "@/app/components/__atoms/Policies/Policies";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <>
      <div className="flex flex-col gap-3 bg-[#f2f2f1] w-full items-center justify-center h-[100vh]">
        <h1 className="text-[32px]">Join LinkedIn now — it’s free!</h1>
        <div className="px-[24px] py-[40px] max-w-[400px] bg-[white] rounded-[10px]">
          <AuthInputs />
          <div className="mt-4 flex gap-3">
            <input type="checkbox" className="size-[24px]" />
            <span>Remember Me</span>
          </div>
          <div className="text-center">
            <Agreement />
          </div>
          <button className="my-4 cursor-pointer w-full rounded-[30px] border-[0px] font-[600] h-[52px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]">
            Agree & Join
          </button>
          <LineOr />
          <h1 className="font-[600]">
            Already on LinkedIn?
            <Link
              href={"/SignIn"}
              className="hover:underline text-[#6466c2] cursor-pointer ml-2"
            >
              Sign in
            </Link>
          </h1>
        </div>

        <h1 className="font-[600]">
          Looking to create a page for a business?{" "}
          <span className="hover:underline text-[#6466c2] cursor-pointer">
            Get help
          </span>
        </h1>
      </div>
      <Policies />
    </>
  );
}

export default SignUp;
