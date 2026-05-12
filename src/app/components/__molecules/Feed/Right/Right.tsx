import Image from "next/image";
import Advertisement from "@/../public/Advertisement.png";
import Logo from "@/../public/logo.png";
import Puzzles from "../../Puzzles/Puzzles";

function Right() {
  const texts: string[] = [
    "About",
    "Accessibility",
    "Help Center",
    "Privacy & Terms",
    "Ad Choices",
    "Advertising",
    "Business Services",
    "More",
  ];
  return (
    <>
      <div className="flex flex-col gap-2 ml-7">
        <Puzzles />
        <Image
          src={Advertisement}
          alt="advertisement"
          className="cursor-pointer"
          width={500}
        />

        <div className="text-center max-w-[300px]">
          {texts.map((text) => {
            return (
              <span
                className="m-4 text-[gray] font-semibold cursor-pointer text-[10px]"
                key={text}
              >
                {text}
              </span>
            );
          })}
          <a
            className="m-4 text-[gray] font-semibold cursor-pointer text-[10px]"
            href="ms-windows-store://pdp/?ProductId=9wzdncrfj4q7"
          >
            Get the LinkedIn app
          </a>
        </div>
        <div className="flex gap-2 justify-center">
          <Image width={60} src={Logo} alt="linkedin logo" />
          <h1 className="text-[12px] text-[gray]">
            LinkedIn Corporation © 2026
          </h1>
        </div>
      </div>
    </>
  );
}

export default Right;
