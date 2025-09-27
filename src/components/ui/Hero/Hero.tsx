import { HeroProps } from "./types";

import Image from "next/image";
import classNames from "classnames";

import styles from "./Hero.module.css";

export const Hero: React.FC<HeroProps> = ({
  imageSrc,
  altText,
  width,
  height,
  children,
  containerHeight,
  ...props
}) => {
  return (
    <section id={styles.hero} style={{ height: containerHeight }} {...props}>
      <div className={styles.hero_image_container}>
        <Image
          src={imageSrc}
          alt={altText}
          width={width}
          height={height}
          className={styles.hero_image}
          priority
        />
      </div>
      <div className={classNames("container", styles.hero_content_container)}>
        {children}
      </div>
    </section>
  );
};
