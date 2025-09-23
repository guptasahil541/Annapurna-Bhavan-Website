import { ImageGalleryProps } from "./types";

import { FC } from "react";
import Image from "next/image";

import styles from "./ImageGallery.module.css";

export const ImageGallery: FC<ImageGalleryProps> = ({ images, ...props }) => {
  return (
    <div className={styles.image_gallery_outer_container} {...props}>
      <div className={styles.image_gallery_inner_container}>
        {images.map((image, index) => {
          return (
            <Image
              src={image}
              alt="Food image"
              width={540}
              height={540}
              key={index}
              className={styles.gallery_image}
            />
          );
        })}
      </div>
      <div className={styles.image_gallery_inner_container}>
        {images.map((image, index) => {
          return (
            <Image
              src={image}
              alt="Food image"
              width={540}
              height={540}
              key={index}
              className={styles.gallery_image}
            />
          );
        })}
      </div>
    </div>
  );
};
