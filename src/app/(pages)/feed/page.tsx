import Feed from "@/app/components/__organisms/Sections/Feed/Feed";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Feed | LinkedIn",
  description: "",
};

function Page() {
  return (
    <>
      <Feed />
    </>
  );
}

export default Page;
