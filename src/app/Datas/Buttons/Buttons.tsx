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
import { StaticImageData } from "next/image";

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
  {
    href: "/",
    svg: "M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",
    text: "Home",
  },
  {
    href: "/",
    svg: "M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5m1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5M7.5 2A4.5 4.5 0 1 0 12 6.5 4.49 4.49 0 0 0 7.5 2",
    text: "My Network",
  },
  {
    href: "/",
    svg: "M17 6V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm10 9a4 4 0 0 0 3-1.38V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.38A4 4 0 0 0 5 14z",
    text: "Jobs",
  },
  {
    href: "/",
    svg: "M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7m-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25m4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25m4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25",
    text: "Messaging",
  },
  {
    href: "/",
    svg: "M22 19h-8.28a2 2 0 1 1-3.44 0H2v-1a4.52 4.52 0 0 1 1.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0 1 22 18zM18.21 7.44A6.27 6.27 0 0 0 12 2a6.27 6.27 0 0 0-6.21 5.44L5 13h14z",
    text: "Notifications",
  },
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

interface puzzle {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

export const puzzles: puzzle[] = [
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
