import { useDarkMode } from "@/app/hooks/CheckDisplay";

function PremiumOffer() {
  const DarkMode = useDarkMode();
  return (
    <>
      <div
        className={`${DarkMode ? "text-white bg-[#1b1e22]" : "text-black bg-[#fefeff]"} rounded-[10px] px-5 py-2 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
      >
        <span className="opacity-70 text-[12px]">
          Access exclusive tools & insights
        </span>
        <div className="text-[14px] flex gap-2 text-center">
          <svg height={24} width={24}>
            <path
              fill="#e7a33e"
              d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
            ></path>
            <path
              fill="#c37d16"
              d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"
            ></path>
          </svg>
          <a
            href="https://www.linkedin.com/premium/survey/?isSS=true&referenceId=HUELV0YOQiqIWm%2BWiDg7%2Fg%3D%3D&upsellOrderOrigin=Tracking%3Av1%3Apremium_homepage_identity_upsell%3ANav%3AIn-Product"
            className={`mt-1 font-[600] hover:text-[#0a0abc] text-[12px] mb-2 cursor-pointer`}
          >
            Try Premium for $0
          </a>
        </div>
      </div>
    </>
  );
}

export default PremiumOffer;
