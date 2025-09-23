import Image from "next/image";
import classNames from "classnames";

import { ImageGallery, Menu } from "@/components";

import styles from "../page.module.css";

import { FOOD_MENU_ITEMS, FOOD_MENU_CATEGORIES } from "@/constants/foodMenu";
import { FOOD_IMAGES } from "@/constants/gallery";

export default function FoodMenu() {
  return (
    <main>
      <section id={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1728910156510-77488f19b152?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero image"
          height={1080}
          width={1920}
          priority={true}
          className={styles.hero_image}
        />
      </section>
      <section id={styles.menu} className="vertical_padding">
        <div className={classNames("container", styles.menu_container)}>
          <Menu
            items={FOOD_MENU_ITEMS}
            categories={FOOD_MENU_CATEGORIES}
            defaultCategory={FOOD_MENU_CATEGORIES.APPETIZERS}
            buttonFill="darkRedOutline"
            buttonBorderRadius="full"
            ctaButtonFill="red"
            ctaButtonLink="/book-a-table"
            ctaButtonText="Book a table"
          />
        </div>
        <ImageGallery images={FOOD_IMAGES} />
      </section>
    </main>
  );
}
