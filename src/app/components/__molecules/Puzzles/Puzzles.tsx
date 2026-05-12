import Image from "next/image";
import Link from "next/link";
import { puzzles } from "@/app/Datas/Buttons/Buttons";

function Puzzles() {
  return (
    <div className="py-[13px] flex flex-col bg-white rounded-[7px] shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.3)] mb-1">
      <h1 className="ml-4">Today's Puzzles</h1>
      {puzzles.map((puzzle) => (
        <Link
          key={puzzle.id}
          href={puzzle.href}
          className="flex gap-2 hover:bg-[#80808060] p-[10px] px-[15px] relative"
        >
          <Image
            width={31}
            height={31}
            className="max-h-[31px] mt-1"
            src={puzzle.image}
            alt="game logo"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold text-[14px]">{puzzle.title}</h1>
            <span className="text-[12px]">{puzzle.description}</span>
            <svg width={12} height={16} className="absolute right-2 top-5">
              <path d="m5 15 4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Puzzles;
