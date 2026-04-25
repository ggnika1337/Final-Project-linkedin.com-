import { footerPolicies } from "@/app/Datas/Buttons/Buttons";
import Image from "next/image";
import React from "react";
import logo from "../../../../../public/logo.png";

function Policies() {
  return (
    <>
      <div className="flex p-[10px] max-[990px]:py-[64px] max-[990px]:px-5 gap-5 flex-wrap overflow-hidden">
        <Image src={logo} width={101} height={30} alt="linkedin logo black" />
        <span className="text-[#666666] text-[15px]">© 2026</span>
        {footerPolicies.map((str) => {
          return (
            <a
              key={str}
              href="/."
              className="hover:underline text-[#666666] font-[600] text-[15px] hover:text-[#1e1e87]"
            >
              {str}
            </a>
          );
        })}
        <a href="/." className="hover:underline text-[#4809bf]">
          Community Guidelines
        </a>
      </div>
    </>
  );
}

export default Policies;
