import Image from "next/image";
import classNames from "classnames";

import { Menu } from "@/components";

import styles from "../page.module.css";

import { FOOD_MENU_ITEMS, FOOD_MENU_CATEGORIES } from "@/constants/foodMenu";

export default function DrinksMenu() {
  return (
    <main>
      <section id={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1656936632096-59fcacae533f?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero image"
          height={1080}
          width={1920}
          priority={true}
          className={styles.hero_image}
        />
      </section>
      <section id={styles.menu}>
        <div className={classNames("container")}>
          <Menu
            items={FOOD_MENU_ITEMS}
            categories={FOOD_MENU_CATEGORIES}
            defaultCategory={FOOD_MENU_CATEGORIES.APPETIZERS}
            buttonFill="darkRedOutline"
            buttonBorderRadius="full"
          />
        </div>
      </section>
    </main>
  );
}
