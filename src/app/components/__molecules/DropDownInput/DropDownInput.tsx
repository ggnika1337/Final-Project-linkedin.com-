import React from "react";
type props = {
  header: string;
  options: string[];
};

function DropDownInput({ header, options }: props) {
  return (
    <>
      <select className="w-[300px] border border-gray-300 pl-1 pr-6 py-3 rounded-[5px]">
        <option>{header}</option>
        {options.map((key) => (
          <option key={key}>{key}</option>
        ))}
      </select>
    </>
  );
}

export default DropDownInput;
