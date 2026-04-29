import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import type { Metadata } from "next";

import SignUp from "@/app/components/__molecules/Auths/SignUp/SignUp";

export const metadata: Metadata = {
  title: "Sign Up | LinkedIn",
  description: "",
};

function page() {
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
      <SignUp />
    </>
  );
}

export default page;
