import { useDarkMode } from "@/app/hooks/CheckDisplay";
import { auth } from "@/config/firebase";
type props = {
  onClick: () => void;
};

function PremiumPopup({ onClick }: props) {
  const texts: string[] = [
    "Message anyone with InMail",
    "Get up to 11x more profile views",
    "Access exclusive company insights",
    "Join live talks with industry leaders",
  ];
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        className={`${DarkMode ? "text-white bg-[#1b1e22]" : "text-black bg-[#fefeff]"} p-[16px] flex flex-col max-w-[320px] rounded-[10px] gap-2 relative overflow-hidden`}
      >
        <svg
          onClick={onClick}
          fill="#ac4600"
          className="min-w-[22px] absolute top-3 right-2 max-w-[22px] h-[22px] cursor-pointer"
        >
          <path
            fill="black"
            d="M14 3.41 9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"
          ></path>
        </svg>
        <h1 className="font-semibold">
          <span>{auth.currentUser?.displayName}</span>, level up your career
        </h1>

        {texts.map((text) => {
          return (
            <span key={text} className="flex gap-3">
              <svg width={20} height={20}>
                <path
                  fill="orange"
                  d="M21 4 10 20l-6-6 1.41-1.41 4.3 4.3L18.57 4Z"
                ></path>
              </svg>
              {text}
            </span>
          );
        })}

        <span
          className={` ${DarkMode ? "text-[#959595] bg-[#1b1e22]" : "text-[#191919b8] bg-[#fefeff]"} text-[14px]`}
        >
          Millions of members use Premium
        </span>
        <a
          href="https://www.linkedin.com/premium/survey/?isSS=false&referenceId=WEb6RKhvQ4qvH%2B3JaZNTVQ%3D%3D&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_interstitial%3ANav%3AIn-Product"
          className="rounded-[15px] cursor-pointer py-1 w-full bg-[#F9C982] hover:bg-[#915907] text-center"
        >
          Try 1 month of Premium for $0
        </a>
        <span
          className={` ${DarkMode ? "text-[#959595] bg-[#1b1e22]" : "text-[#191919b8] bg-[#fefeff]"} text-[14px]`}
        >
          1-month free trial with 24/7 support.
        </span>
      </div>
    </>
  );
}

export default PremiumPopup;
