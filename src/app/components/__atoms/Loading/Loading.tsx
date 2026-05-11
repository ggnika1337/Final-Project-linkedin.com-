import LoadingGif from "@/../public/Loading.gif";
import Logo from "@/../public/logo.png";
import Image from "next/image";

function Loading() {
  return (
    <div className="h-full flex-col gap-10 flex items-center justify-center">
      <Image src={Logo} alt="LinkedIn Logo" width={200} height={200} />
      <Image src={LoadingGif} alt="loading" width={300} height={400} />
    </div>
  );
}

export default Loading;
