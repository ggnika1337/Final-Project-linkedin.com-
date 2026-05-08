"use client";
import Agreement from "@/app/components/__atoms/Agreement/Agreement";
import LineOr from "@/app/components/__atoms/LineOr/LineOr";
import Policies from "@/app/components/__atoms/Policies/Policies";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formTypes } from "@/app/helpers/Props/Props";
import { schema, schemaTwo } from "@/app/helpers/Schemas/Schemas";
import Remember from "@/app/components/__atoms/Remember/Remember";
import AuthButton from "@/app/components/__atoms/AuthButton/AuthButton";
import { useRouter } from "next/navigation";
import { EmailPassword } from "@/app/hooks/Auth";

function SignUp() {
  const router = useRouter();
  const [stage, setStage] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formTypes>({
    resolver: yupResolver(stage === 0 ? (schema as any) : (schemaTwo as any)),
  });

  function stageOne() {
    setStage(stage + 1);
    console.log("stage 1 complete");
  }

  if (stage === 0) {
    return (
      <>
        <form
          onSubmit={handleSubmit(stageOne)}
          className="flex flex-col gap-3 bg-[#f2f2f1] w-full items-center justify-center h-[100vh]"
        >
          <h1 className="text-[32px]">Join LinkedIn now — it’s free!</h1>
          <div className="px-[24px] py-[40px] max-w-[400px] w-full bg-[white] rounded-[10px]">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                style={{
                  border: errors.email
                    ? "1px solid #cf0007"
                    : "1px solid black",
                }}
                className="border-1  rounded-[5px] p-[10px]"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-[#cf0007]">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label>Password</label>
              <input
                style={{
                  border: errors.password
                    ? "1px solid #cf0007"
                    : "1px solid black",
                }}
                className="border-1 border-black rounded-[5px] p-[10px] mb-3"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-[#cf0007]">{errors.password.message}</p>
              )}
            </div>
            <Remember />
            <div className="text-center">
              <Agreement />
            </div>
            <AuthButton text="Agree & Join" />
            <LineOr />
            <h1 className="font-[600]">
              Already on LinkedIn?
              <Link
                href={"/sign-in"}
                className="hover:underline text-[#6466c2] cursor-pointer ml-2"
              >
                Sign in
              </Link>
            </h1>
          </div>

          <h1 className="font-[600] mt-3 text-center">
            Looking to create a page for a business?
            <span className="hover:underline ml-2 text-[#6466c2] cursor-pointer">
              Get help
            </span>
          </h1>
        </form>
        <Policies />
      </>
    );
  } else if (stage === 1) {
    return (
      <>
        <form
          onSubmit={handleSubmit((data) => EmailPassword(data, router))}
          className="flex flex-col bg-[#f2f2f1] gap-3 w-full h-full items-center justify-center"
        >
          <input className="hidden" type="email" {...register("email")} />
          <input className="hidden" type="password" {...register("password")} />
          <h1 className="text-[32px] max-md:text-[25px]">Join LinkedIn now — it’s free!</h1>
          <div className="px-[24px] py-[20px] max-w-[400px] w-full bg-[white] rounded-[10px]">
            <div className="flex flex-col gap-1">
              <label>First name</label>
              <input
                style={{
                  border: errors.firstName
                    ? "1px solid #cf0007"
                    : "1px solid black",
                }}
                className="border-1 rounded-[5px] p-[10px]"
                type="text"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-[#cf0007]">{errors.firstName.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label>Last name</label>
              <input
                style={{
                  border: errors.lastName
                    ? "1px solid #cf0007"
                    : "1px solid black",
                }}
                className="border-1 rounded-[5px] p-[10px]"
                type="text"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-[#cf0007]">{errors.lastName.message}</p>
              )}
            </div>
            <AuthButton text="Continue" />
          </div>
        </form>
      </>
    );
  }
}

export default SignUp;
