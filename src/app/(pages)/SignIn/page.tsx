import Image from "next/image";
import logo from "../../../../public/logo.png";
import SignIn from "@/app/components/__molecules/Auths/SignIn/SignIn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | LinkedIn",
  description: "",
};

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
      <SignIn />
    </>
  );
}

export default Page;
