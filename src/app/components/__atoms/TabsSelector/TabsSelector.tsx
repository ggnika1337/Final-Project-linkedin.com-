import { useDarkMode } from "@/app/hooks/CheckDisplay";

function TabsSelector() {
  const DarkMode = useDarkMode();
  return (
    <div
      className={`${DarkMode ? "text-white bg-[#1b1e22]" : "text-black bg-[#fefeff]"} rounded-[10px] text-[12px] px-5 py-4 flex flex-col gap-4 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]`}
    >
      <a
        href={""}
        key={name}
        className="flex items-center gap-5 font-semibold cursor-pointer"
      >
        <svg fill={`${DarkMode ? "white" : "black"}`} width={15} height={15}>
          <path d="M13 4a3 3 0 0 0-3-3H3v14l5-4.5 5 4.5z"></path>
        </svg>
        Saved items
      </a>
      <a
        href={"https://www.linkedin.com/groups/"}
        className="flex items-center gap-5 font-semibold cursor-pointer"
      >
        <svg fill={`${DarkMode ? "white" : "black"}`} width={15} height={15}>
          <path d="M8.5 7h-1A1.5 1.5 0 0 0 6 8.5V14h4V8.5A1.5 1.5 0 0 0 8.5 7m4.25 1h-.5A1.25 1.25 0 0 0 11 9.25V14h3V9.25A1.25 1.25 0 0 0 12.75 8"></path>
          <circle cx="8" cy="4" r="2"></circle>
          <circle cx="12.5" cy="5.5" r="1.5"></circle>
          <path d="M3.75 8h-.5A1.25 1.25 0 0 0 2 9.25V14h3V9.25A1.25 1.25 0 0 0 3.75 8"></path>
          <circle cx="3.5" cy="5.5" r="1.5"></circle>
        </svg>
        Groups
      </a>
      <a
        href={"https://www.linkedin.com/mynetwork/network-manager/newsletters/"}
        className="flex items-center gap-5 font-semibold cursor-pointer"
      >
        <svg fill={`${DarkMode ? "white" : "black"}`} width={15} height={15}>
          <path d="M13 4v8H3V4zm2-2H1v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-3 3H4v2h8zM7 8H4v3h3zm5 0H8v1h4zm0 2H8v1h4z"></path>
        </svg>
        Newsletters
      </a>
      <a
        href={"https://www.linkedin.com/events/"}
        className="flex items-center gap-5 font-semibold cursor-pointer"
      >
        <svg fill={`${DarkMode ? "white" : "black"}`} width={15} height={15}>
          <path d="M2 2v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V2zm8.5 1.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-5 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1M12 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h8z"></path>
        </svg>
        Events
      </a>
    </div>
  );
}

export default TabsSelector;
