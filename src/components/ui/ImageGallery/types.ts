import { HTMLAttributes } from "react";

export interface ImageGalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: string[];
}
