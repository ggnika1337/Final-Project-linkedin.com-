import People from "@/../public/bar/People.png";
import Jobs from "@/../public/bar/Bag.png";
import Bell from "@/../public/bar/Bell.svg";
import Home from "@/../public/bar/Home.svg";
import Messages from "@/../public/bar/Messages.png";
import Groups from "@/../public/feed/groups.png";
import Favourites from "@/../public/feed/favourites.png";
import News from "@/../public/feed/news.png";
import Events from "@/../public/feed/events.png";
import Game from "@/../public/games/Game.png";
import GameOne from "@/../public/games/GameOne.png";
import GameTwo from "@/../public/games/GameTwo.png";
import GameThree from "@/../public/games/GameThree.png";

export const GAMES: string[] = [
  "Patches",
  "Zip",
  "Mini Sudoku",
  "Queens",
  "Tango",
  "Pinpoint",
  "Crossclimb",
];

export const BUTTONS: string[] = [
  "E-Commerce Platforms",
  "CRM Software",
  "Human Resources Management",
  "Recruting Software",
  "Sales Intelligence Software",
  "Project Management Software",
  "Help Desk Software",
  "Social Networking Software",
  "Desktop Publishing Software",
];

export const topics: string[] = [
  "Artificial Intelligence for Business 1,040+ course",
  "Business Analysis and Strategy 2,030+ course",
  "Diversity, Equity, and Inclusion (DEI) 340+ course",
  "Business Software and Tools 3,480+ course",
  "Career Development 720+ course",
  "Customer Service 320+ course",
];

export const footerStrings: string[] = [
  "Help Center",
  "About",
  "Press",
  "Blog",
  "Careers",
  "Developers",
];

export const footerStringsTwo: string[] = [
  "Learning",
  "Jobs",
  "Games",
  "Mobile",
  "Services",
  "Products",
  "Top Companies",
  "Top Startups",
  "Top Colleges",
];

export const footerStringsThree: string[] = [
  "Talent",
  "Marketing",
  "Sales",
  "Learning",
];

export const footerStringsFour: string[] = [
  "Members",
  "Jobs",
  "Companies",
  "Featured",
  "Learning",
  "Posts",
  "Articles",
  "Schools",
  "News",
  "News Letters",
  "Services",
  "Products",
  "Advice",
  "People Search",
];

export const footerPolicies: string[] = [
  "About",
  "Accessibility",
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
];

export const visible: string[] = [
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
];

export const moreStr: string[] = [
  "Healthcare Service",
  "Sales",
  "Program And Project Management",
  "Accounting",
  "Arts and Design",
  "Community and Social Services",
  "Consulting",
  "Education",
  "Entrepreneurship",
  "Legal",
  "Media and Communications",
  "Military and Protective Services",
  "Product Management",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Support",
  "Administrative",
];

export const tabs = [
  { href: "/", image: Home, text: "Home" },
  { href: "/", image: People, text: "My Network" },
  { href: "/", image: Jobs, text: "Jobs" },
  { href: "/", image: Messages, text: "Messaging" },
  { href: "/", image: Bell, text: "Notifications" },
];

export const tabsNav = [
  { icon: Favourites, name: "Saved items", href: "" },
  { icon: Groups, name: "Groups", href: "https://www.linkedin.com/groups/" },
  {
    icon: News,
    name: "Newsletters",
    href: "https://www.linkedin.com/mynetwork/network-manager/newsletters/",
  },
  { icon: Events, name: "Events", href: "https://www.linkedin.com/events/" },
];

export const smiles: string[] = [
  " :D ",
  " :) ",
  " :( ",
  " :P ",
  " :O ",
  " :/ ",
  " :3 ",
  " ^_^ ",
  " -_- ",
  " o_O ",
  " xD ",
  " T_T ",
];

interface bizButton {
  header: string;
  span: string;
}

export const bizButtons: bizButton[] = [
  { header: "Hire on LinkedIn", span: "Find, attract and recruit talent" },
  { header: "Sell with LinkedIn", span: "Unlock sales opportunities" },
  { header: "Post a job for free", span: "Find quality candidates" },
  {
    header: "Advertise on LinkedIn",
    span: "Acquire customers and grow your business",
  },
  {
    header: "Get started with Premium",
    span: "Expand and leverage your network",
  },
  { header: "Learn with LinkedIn", span: "Courses to develop your employees" },
  { header: "Admin Center", span: "Manage Billing and Account Details" },
];

export const puzzles: object[] = [
  {
    id: 1,
    image: Game,
    title: "Patches #56",
    description: "Piece it together",
    href: "https://www.linkedin.com/games/patches/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMT%2BMITMqR3mWOUqpl0%2FVHg%3D%3D",
  },
  {
    id: 2,
    image: GameOne,
    title: "Zip #421",
    description: "Complete the path",
    href: "https://www.linkedin.com/games/zip/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMT%2BMITMqR3mWOUqpl0%2FVHg%3D%3D",
  },
  {
    id: 3,
    image: GameTwo,
    title: "Mini Sudoku #274",
    description: "The classic game, made mini",
    href: "https://www.linkedin.com/games/mini-sudoku/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMT%2BMITMqR3mWOUqpl0%2FVHg%3D%3D",
  },
  {
    id: 4,
    image: GameThree,
    title: "Tango #582",
    description: "Harmonize the grid",
    href: "https://www.linkedin.com/games/tango/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BMT%2BMITMqR3mWOUqpl0%2FVHg%3D%3D",
  },
];
