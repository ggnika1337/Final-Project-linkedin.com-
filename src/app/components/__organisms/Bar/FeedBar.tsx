import Image from "next/image";
import React from "react";
import logoSmall from "../../../../../public/logo small.png";

function FeedBar() {
  return (
    <>
      <div className="w-full h-[52px] bg-[#fefeff]">
        <div className="max-w-[1128px] flex justify-between">
          <div>
            <Image
              src={logoSmall}
              width={34}
              height={34}
              className="cursor-pointer max-md:block md:hidden min-w-[30px]"
              alt="linkedin logo small"
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default FeedBar;
