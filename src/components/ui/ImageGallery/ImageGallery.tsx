"use client";

import { ImageGalleryProps } from "./types";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { useGSAP } from "@/utils/gsap";

import styles from "./ImageGallery.module.css";

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  ...props
}) => {
  const imageGalleryRefOne = useRef<HTMLDivElement | null>(null);
  const imageGalleryRefTwo = useRef<HTMLDivElement | null>(null);
  const tweenRefs = useRef<gsap.core.Tween[]>([]);

  useGSAP(() => {
    const tween1 = gsap.fromTo(
      imageGalleryRefOne.current,
      { xPercent: 0 },
      { xPercent: -100, repeat: -1, ease: "none", duration: 50 }
    );

    const tween2 = gsap.fromTo(
      imageGalleryRefTwo.current,
      { xPercent: 0 },
      { xPercent: -100, repeat: -1, ease: "none", duration: 50 }
    );

    tweenRefs.current = [tween1, tween2];
  }, []);

  const handleMouseEnter = () => {
    tweenRefs.current.forEach((tween) => tween.timeScale(0.3));
  };

  const handleMouseLeave = () => {
    tweenRefs.current.forEach((tween) => tween.timeScale(1));
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.image_gallery_outer_container}
      {...props}
    >
      <div
        ref={imageGalleryRefOne}
        className={styles.image_gallery_inner_container}
      >
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
      <div
        ref={imageGalleryRefTwo}
        className={styles.image_gallery_inner_container}
        aria-hidden
      >
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
