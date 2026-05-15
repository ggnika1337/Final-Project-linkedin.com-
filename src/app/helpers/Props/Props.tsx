import { StaticImageData } from "next/image";
import { RefObject } from "react";

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
  tailwind: string;
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
  onSubmit: () => void;
  onChange: () => void;
};

export type SliderPageProps = {
  header: string;
  text: string;
  img: StaticImageData;
};

export type postAdditionsProps = {
  label: string;
  svg: string;
  onChange: () => void;
  onSubmit: () => void;
  change: () => void;
  onClick: () => void;
};

export type newPostPopupProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  postType: string;
  close: () => void;
  mediaRef: RefObject<HTMLDivElement | null>;
};

export type pfpProps = {
  size: number | `${number}` | undefined;
  plusSize: number | `${number}` | undefined;
  src: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  tailwind: string;
  change: () => void;
  plusDisplay: any;
};

export type postProps = {
  id: string;
  text: string;
  ago: Date;
  user: string;
  pfp: any;
  image: any;
  like: () => void;
  likeCount: number;
  comments: () => void;
  commentsCount: number;
  tailwind: string;
  authorId: string;
};
