"use client";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { CheckAuth } from "@/app/Datas/Functions/CheckAuth";

function Feed() {
  CheckAuth();
  const Router = useRouter();

  async function logout() {
    try {
      await signOut(auth);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(auth?.currentUser?.email);

  return (
    <>
      <button className="bg-black" onClick={logout}>
        LOG OUT
      </button>
    </>
  );
}

export default Feed;
