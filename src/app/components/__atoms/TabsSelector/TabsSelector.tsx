import Image from "next/image";
import { tabsNav } from "@/app/Datas/Buttons/Buttons";

function TabsSelector() {
  return (
    <div className="rounded-[10px] bg-[#fefeff] px-5 py-4 flex flex-col gap-4 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
      {tabsNav.map(({ icon, name, href }) => (
        <a
          href={href}
          key={name}
          className="flex items-center gap-5 font-semibold cursor-pointer"
        >
          <Image src={icon} alt={name} />
          {name}
        </a>
      ))}
    </div>
  );
}

export default TabsSelector;
