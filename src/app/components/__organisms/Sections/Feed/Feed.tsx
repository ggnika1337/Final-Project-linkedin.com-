"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckAuth } from "@/app/hooks/CheckAuth";
import { resendVerification } from "@/app/hooks/Auth";
import FeedBar from "../../Bar/FeedBar";
import Left from "@/app/components/__molecules/Feed/Left/Left";
import Middle from "@/app/components/__molecules/Feed/Middle/Middle";
import { auth } from "@/config/firebase";
import Loading from "@/app/components/__atoms/Loading/Loading";
import Right from "@/app/components/__molecules/Feed/Right/Right";

function Feed() {
  const [verify, setVerify] = useState<boolean>();
  const Router = useRouter();
  CheckAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem(
      "emailVerified",
      auth.currentUser?.emailVerified ? "true" : "false",
    );
    setVerify(auth.currentUser?.emailVerified !== true);

    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [auth.currentUser]);

  if (loading) {
    return <Loading />;
  } else
    return (
      <>
        {verify && (
          <div className="flex gap-3 py-5 px-2">
            <svg fill="#ac4600" className="min-w-[22px] max-w-[22px] h-[22px]">
              <path d="M14.2 1.9c-.6-.6-1.4-.9-2.2-.9s-1.6.3-2.2.9L1.9 9.8c-.6.6-.9 1.4-.9 2.2s.3 1.6.9 2.2l7.9 7.9c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9l7.9-7.9c.6-.6.9-1.4.9-2.2s-.3-1.6-.9-2.2zM11 6h2v8h-2zm1 12.25c-.7 0-1.25-.55-1.25-1.25s.65-1.25 1.25-1.25 1.25.55 1.25 1.25-.55 1.25-1.25 1.25"></path>
            </svg>
            <span className="font-semibold text-[#b65c20d2]">
              We’re almost there! We just need you to confirm your email
              address. Check your <span>{auth.currentUser?.email}</span> account
              or
              <span
                onClick={() => {
                  resendVerification();
                  setVerify(false);
                }}
                className="hover:underline text-[#b65d20] font-bold cursor-pointer ml-2"
              >
                request a new confirmation link.
              </span>
            </span>
            <button
              onClick={() => setVerify(false)}
              className="cursor-pointer hover:bg-[#80808031] size-[32px] rounded-full"
            >
              <svg className="ml-2 mt-1 size-[20px]">
                <path d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
              </svg>
            </button>
          </div>
        )}
        <div className="w-full h-full flex flex-col items-center bg-[#f4f2ee]">
          <FeedBar />
          <div className="container max-w-[1128px] w-full justify-center px-2 mt-6 flex max-[830px]:flex-col max-[830px]:items-center">
            <Left />
            <Middle />
            <Right />
          </div>
        </div>
      </>
    );
}

export default Feed;
