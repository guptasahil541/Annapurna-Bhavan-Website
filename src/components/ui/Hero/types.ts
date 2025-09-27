import { HTMLAttributes } from "react";

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
  containerHeight: string;
}
