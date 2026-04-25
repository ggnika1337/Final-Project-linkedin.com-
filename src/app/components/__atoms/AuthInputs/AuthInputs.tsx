import React from "react";
type props = {
  EmailChange: string;
  PasswordChange: string;
};

function AuthInputs({ EmailChange, PasswordChange }: props) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label>Email</label>
        <input
          className="border-1 border-black rounded-[5px] p-[10px]"
          type="email"
          onChange={EmailChange}
        />
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <label>Password</label>
        <input
          className="border-1 border-black rounded-[5px] p-[10px] mb-3"
          type="password"
          onChange={PasswordChange}
        />
      </div>
    </>
  );
}

export default AuthInputs;
