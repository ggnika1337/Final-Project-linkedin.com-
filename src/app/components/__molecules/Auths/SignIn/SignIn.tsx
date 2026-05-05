"use client";
import { useState } from "react";
import Agreement from "../../../__atoms/Agreement/Agreement";
import Link from "next/link";
import google from "../../../../../../public/start/GoogleLogo.png";
import Image from "next/image";
import LineOr from "@/app/components/__atoms/LineOr/LineOr";
import Policies from "@/app/components/__atoms/Policies/Policies";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../config/firebase";
import { GoogleSignIn } from "@/app/Datas/Functions/Auth";

import { useRouter } from "next/navigation";

function SignIn() {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  async function signIn(e: any) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/feed");
    } catch (error) {
      setError("Wrong email or password");
    }
  }

  return (
    <>
      <form
        onSubmit={signIn}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="flex flex-col bg-white border-1 border-[#e9e8e9] rounded-[10px] p-[30px]">
          <h1 className="text-[34px] font-[500]">Sign in</h1>
          <span className="font-[600] mt-2 flex gap-2">
            New to LinkedIn?
            <Link href={"/sign-up"} className="text-[#0A66C2]">
              Join now
            </Link>
          </span>
          <button
            type="button"
            onClick={GoogleSignIn}
            className="mt-4 w-full h-[40px] bg-[transparent] border-1 border-gray-500 rounded-[20px] text-black cursor-pointer flex items-center justify-center gap-3 font-[500]"
          >
            <Image src={google} width={27} alt="google logo" /> Continue with
            Google
          </button>
          <Agreement />
          <LineOr />
          <div>
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                className={`border-1 ${error ? "border-red-500" : "border-black"} rounded-[5px] p-[10px] `}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span className="text-[#CB112D]">{error}</span>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label>Password</label>
              <input
                className={`border-1 ${error ? "border-red-500" : "border-black"} rounded-[5px] p-[10px] `}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <span className="text-[#CB112D]">{error}</span>
          </div>
          <a href="" className="text-[#0a66c2] hover:underline mt-2">
            Forgot password?
          </a>
          <div className="mt-4 flex gap-3">
            <input type="checkbox" className="size-[24px]" />
            <span>Keep me signed in</span>
          </div>
          <button
            type="submit"
            className="mt-4 cursor-pointer rounded-[30px] border-[0px] font-[600] h-[52px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]"
          >
            Sign in
          </button>
        </div>
      </form>
      <Policies />
    </>
  );
}

export default SignIn;
