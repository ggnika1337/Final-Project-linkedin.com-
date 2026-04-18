"use client";
type props = {
  text: string;
};

function Button({ text, colorHover, borderColor, bg }: props) {
  return (
    <>
      <button
        className={`rounded-[30px] border-[1px] border-[#7a7b79] px-[50px] py-[13px] bg-transparent hover:bg-[#5d5d5d]`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
