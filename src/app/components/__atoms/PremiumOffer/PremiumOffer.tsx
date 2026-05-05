import Image from "next/image";
import Premium from "../../../../../public/feed/premium.png";

function PremiumOffer() {
  return (
    <>
      <div className="rounded-[10px] bg-[#fefeff] px-5 py-2 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
        <span className="opacity-70 text-[12px]">
          Access exclusive tools & insights
        </span>
        <div className="text-[14px] flex gap-2 text-center">
          <Image src={Premium} alt={"Premium"} />
          <span className="mt-1 font-[600] hover:text-[#0a0abc] cursor-pointer">
            Try Premium for $0
          </span>
        </div>
      </div>
    </>
  );
}

export default PremiumOffer;
