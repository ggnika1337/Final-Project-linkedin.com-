"use client";
import React, { useState } from "react";
import Button from "../../__atoms/Button/Button";

function ButtonsWrap() {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="flex gap-[15px] flex-col items-start">
        <div className="flex-wrap max-w-[640px] flex gap-[7px]">
          <Button text="Business Development" />
          <Button text="Finance" />
          <Button text="Administrative Assistant" />
          <Button text="Retail Associate" />
          <Button text="Customer Service" />
          <Button text="Operations" />
          <Button text="Information Technology" />
          <Button text="Marketing" />
          <Button text="Human Resources" />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Healthcare Service"
          />
          <Button style={{ display: more ? "flex" : "none" }} text="Sales" />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Program And Project Management"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Accounting"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Arts and Design"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Community and Social Services"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Consulting"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Education"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Entrepreneurship"
          />
          <Button style={{ display: more ? "flex" : "none" }} text="Legal" />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Media and Communications"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Military and Protective Services"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Product Management"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Purchasing"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Quality Assurance"
          />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Real Estate"
          />
          <Button style={{ display: more ? "flex" : "none" }} text="Research" />
          <Button style={{ display: more ? "flex" : "none" }} text="Support" />
          <Button
            style={{ display: more ? "flex" : "none" }}
            text="Administrative"
          />
        </div>
        <button
          className="border-1 rounded-[30px] px-[18px] py-[4px] flex gap-[5px] hover:bg-gray-300 cursor-pointer flex items-center justify-center"
          onClick={() => {
            setMore(!more);
          }}
        >
          {more ? "Show less" : "Show more"}
          <span
            style={{ transform: more ? "rotate(180deg)" : "rotate(0deg)" }}
            className="font-bold h-[30px]"
          >
            ⌄
          </span>
        </button>
      </div>
    </>
  );
}

export default ButtonsWrap;
