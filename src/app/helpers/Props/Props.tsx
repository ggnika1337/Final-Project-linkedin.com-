import { StaticImageData } from "next/image";

export type props = {
  text: string;
  number: number;
  image: StaticImageData;
  href: string;
};

export type formTypes = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type dropDownProps = {
  image: StaticImageData;
  text: string;
  onClick: () => void;
  searchOpen: boolean;
};

export type FeedBarTabsProps = {
  svg: string;
  text: string;
  href: string;
  border: boolean;
  onClick: () => void;
  searchOpen: boolean;
};

export type NewPostProps = {
  VideoClick: () => void;
  PhotoClick: () => void;
  TextClick: () => void;
};

export type BarTabsProps = {
  image: StaticImageData;
  text: string;
  href: string;
};

export type PostMediaProps = {
  onClick: () => void;
  upload: () => void;
  mediaRef: React.RefObject<HTMLDivElement | null>;
};

export type SliderPageProps = {
  header: string;
  text: string;
  img: StaticImageData;
};
