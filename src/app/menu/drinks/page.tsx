import classNames from "classnames";

import { Hero, ImageGallery, Menu } from "@/components";

import styles from "../page.module.css";

import {
  DRINKS_MENU_ITEMS,
  DRINKS_MENU_CATEGORIES,
} from "@/constants/drinksMenu";
import { DRINK_IMAGES } from "@/constants/gallery";

export default function DrinksMenu() {
  return (
    <main>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1656936632096-59fcacae533f?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Hero background image"
        height={1080}
        width={1920}
        containerHeight="60svh"
      >
        <h1>Drinks Menu</h1>
      </Hero>
      <section id={styles.menu} className="vertical_padding">
        <div className={classNames("container", styles.menu_container)}>
          <Menu
            items={DRINKS_MENU_ITEMS}
            categories={DRINKS_MENU_CATEGORIES}
            defaultCategory={DRINKS_MENU_CATEGORIES.BEVERAGES}
            buttonFill="darkRedOutline"
            buttonBorderRadius="full"
            ctaButtonFill="red"
            ctaButtonLink="/book/table"
            ctaButtonText="Book a table"
          />
        </div>
        <ImageGallery images={DRINK_IMAGES} />
      </section>
    </main>
  );
}
