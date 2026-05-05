import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
  text: string;
  href: string;
  border: boolean;
  onClick: () => void;
};

function FeedBarTabs({ image, text, href, border, onClick }: Props) {
  return (
    <>
      <Link
        onClick={onClick}
        className={`flex opacity-70 hover:opacity-100 w-[80px] h-full justify-center items-center ${border ? "border-b-2 border-b-black" : ""}`}
        href={href}
      >
        <div className="flex flex-col items-center w-full">
          <Image src={image} width={25} alt="bar selector" />
          <h1 className="text-[12px]">{text}</h1>
        </div>
      </Link>
    </>
  );
}

export default FeedBarTabs;
