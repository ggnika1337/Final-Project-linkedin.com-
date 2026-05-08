import Image from "next/image";
import Groups from "../../../../../public/feed/groups.png";
import Favourites from "../../../../../public/feed/favourites.png";
import News from "../../../../../public/feed/news.png";
import Events from "../../../../../public/feed/events.png";

const tabs = [
  { icon: Favourites, name: "Saved items", href: "" },
  { icon: Groups, name: "Groups", href: "https://www.linkedin.com/groups/" },
  {
    icon: News,
    name: "Newsletters",
    href: "https://www.linkedin.com/mynetwork/network-manager/newsletters/",
  },
  { icon: Events, name: "Events", href: "https://www.linkedin.com/events/" },
];

function TabsSelector() {
  return (
    <div className="rounded-[10px] bg-[#fefeff] px-5 py-4 flex flex-col gap-4 shadow-[0px_0px_0px_1px_rgb(140_140_140_/_0.2)]">
      {tabs.map(({ icon, name, href }) => (
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
