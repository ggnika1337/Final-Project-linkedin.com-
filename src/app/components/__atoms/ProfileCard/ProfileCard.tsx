import Image from "next/image";
import Banner from "../../../../../public/feed/banner.png";
type props = {
  location: string;
};

function ProfileCard({ location }: props) {
  return (
    <>
      <div className="rounded-[10px] bg-[#fefeff] shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
        <Image
          src={Banner}
          alt={"background banner"}
          className="w-full rounded-t-[10px]"
        />
        <div className="p-4 flex flex-col mt-13">
          <h1 className="text-[20px] font-[500]">nika chxikvi</h1>
          <span className="opacity-50">--</span>
          <span className="opacity-50 text-[14px]">{location}</span>
          <button className="bg-[#f4f2ee] border-dashed border-1 rounded-[5px] text-start px-1 text-[#56687A] font-[600] mt-3">
            + Experience
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
