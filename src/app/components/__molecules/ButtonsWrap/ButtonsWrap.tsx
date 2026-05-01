"use client";
import React, { useState } from "react";
import Button from "../../__atoms/Button/Button";
import { visible, moreStr } from "../../../Datas/Buttons/Buttons";

function ButtonsWrap() {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="flex gap-[15px] flex-col items-start">
        <div className="flex-wrap max-w-[640px] flex gap-[7px]">
          {visible.map((text) => (
            <Button key={text} text={text} />
          ))}
          {more && moreStr.map((text) => <Button key={text} text={text} />)}
        </div>

        <button
          className="border-1 rounded-[30px] px-[18px] py-[4px] flex items-center justify-center gap-[5px] hover:bg-gray-300 cursor-pointer"
          onClick={() => setMore(!more)}
        >
          {more ? "Show less" : "Show more"}
          <span
            className="font-bold h-[30px]"
            style={{ transform: more ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ⌄
          </span>
        </button>
      </div>
    </>
  );
}

export default React.memo(ButtonsWrap);
