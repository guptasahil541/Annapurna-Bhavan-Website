import Image from "next/image";

import { CTA } from "@/components/ui";

import styles from "./Hero.module.css";
import classNames from "classnames";

export const Hero = () => {
  return (
    <section id={styles.hero}>
      <div className={styles.hero_image_container}>
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero background image"
          width={1920}
          height={1080}
          className={styles.hero_image}
          priority
        />
      </div>
      <div className={classNames("container", styles.hero_container)}>
        <h1>
          Experience the Taste of India
          <br />
          in every bite
        </h1>
        <CTA />
      </div>
    </section>
  );
};
