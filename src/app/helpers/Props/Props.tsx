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
