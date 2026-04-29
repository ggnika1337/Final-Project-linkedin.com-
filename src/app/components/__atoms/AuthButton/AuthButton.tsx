import React from "react";

type props = {
  text: string;
};

function AuthButton({ text }: props) {
  return (
    <>
      <button
        type="submit"
        className="my-4 cursor-pointer w-full rounded-[30px] border-[0px] font-[600] h-[52px] text-white px-[25px] py-[13px] bg-[#0a66c2] hover:bg-[#073c71]"
      >
        {text}
      </button>
    </>
  );
}

export default AuthButton;
