"use client";
type props = {
  text: string;
};

function Button({ text, colorHover, borderColor, bg, style }: props) {
  return (
    <>
      <button
        style={style}
        className={`rounded-[30px] border-[1px] border-[#7a7b79] px-[50px] py-[13px] bg-transparent hover:bg-[#5d5d5d26] cursor-pointer whitespace-nowrap max-md:px-[15px] max-md:py-[5px]`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
