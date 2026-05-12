import LoadingGif from "@/../public/Loading.gif";
import Logo from "@/../public/logo.png";
import { useDarkMode } from "@/app/hooks/CheckDisplay";
import Image from "next/image";

function Loading() {
  const darkMode = useDarkMode();
  return (
    <div
      className={`h-full ${darkMode ? "bg-[#1b1e22]" : "bg-[#fefeff]"} w-full flex-col gap-10 flex items-center justify-center`}
    >
      <Image src={Logo} alt="LinkedIn Logo" width={200} height={200} />
      <Image src={LoadingGif} alt="loading" width={300} height={400} />
    </div>
  );
}

export default Loading;
