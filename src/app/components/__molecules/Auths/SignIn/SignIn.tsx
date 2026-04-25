"use client";
import React, { useState } from "react";
import Agreement from "../../../__atoms/Agreement/Agreement";
import Link from "next/link";
import google from "../../../../../../public/start/GoogleLogo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import Image from "next/image";
import AuthInputs from "../../../__atoms/AuthInputs/AuthInputs";
import LineOr from "@/app/components/__atoms/LineOr/LineOr";
import Policies from "@/app/components/__atoms/Policies/Policies";

function SignIn() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  async function signIn() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col bg-white border-1 border-[#e9e8e9] rounded-[10px] p-[30px]">
          <h1 className="text-[34px] font-[500]">Sign in</h1>
          <span className="font-[600] mt-2 flex gap-2">
            New to LinkedIn?
            <Link href={"/SignUp"} className="text-[#0A66C2]">
              Join now
            </Link>
          </span>
          <button className="mt-4 w-full h-[40px] bg-[transparent] border-1 border-gray-500 rounded-[20px] text-black cursor-pointer flex items-center justify-center gap-3 font-[500]">
            <Image src={google} width={27} alt="google logo" /> Continue with
            Google
          </button>
          <Agreement />
          <LineOr />
          <div>
            <AuthInputs />
            <a href="" className="text-[#0a66c2] hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mt-4 flex gap-3">
            <input type="checkbox" className="size-[24px]" />
            <span>Keep me signed in</span>
          </div>
          <button
            onClick={signIn}
            className="mt-4 cursor-pointer rounded-[30px] border-[0px] font-[600] h-[52px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]"
          >
            Sign in
          </button>
        </div>
      </div>
      <Policies />
    </>
  );
}

export default SignIn;
