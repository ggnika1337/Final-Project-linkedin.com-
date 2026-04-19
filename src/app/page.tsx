import Image from "next/image";
import Bar from "./components/__organisms/Bar/Bar";
import Start from "./components/__organisms/Sections/Start/Start";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <Bar />
        <Start />
      </div>
    </>
  );
}
