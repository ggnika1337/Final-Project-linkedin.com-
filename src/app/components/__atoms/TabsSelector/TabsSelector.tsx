import Image from "next/image";
import Groups from "../../../../../public/feed/groups.png";
import Favourites from "../../../../../public/feed/favourites.png";
import News from "../../../../../public/feed/news.png";
import Events from "../../../../../public/feed/events.png";

const tabs = [
  { icon: Favourites, name: "Saved items" },
  { icon: Groups, name: "Groups" },
  { icon: News, name: "Newsletters" },
  { icon: Events, name: "Events" },
];

function TabsSelector() {
  return (
    <div className="rounded-[10px] bg-[#fefeff] px-5 py-4 flex flex-col gap-4 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
      {tabs.map(({ icon, name }) => (
        <div
          key={name}
          className="flex items-center gap-5 font-semibold cursor-pointer"
        >
          <Image src={icon} alt={name} />
          {name}
        </div>
      ))}
    </div>
  );
}

export default TabsSelector;
