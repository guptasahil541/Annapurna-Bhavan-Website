import classNames from "classnames";

import { Menu, ImageGallery } from "@/components/ui";

import styles from "./MenuHighlights.module.css";

import { FOOD_MENU_CATEGORIES, FOOD_MENU_ITEMS } from "@/constants/foodMenu";
import { FOOD_IMAGES } from "@/constants/gallery";

export const MenuHighlights = () => {
  return (
    <section id={styles.menu_highlights} className="vertical_padding">
      <div
        className={classNames("container", styles.menu_hightlights_container)}
      >
        <h2 className={styles.menu_highlights_heading}>
          Discover some of <br /> our favourites
        </h2>
        <div className={styles.menu_container}>
          <Menu
            items={FOOD_MENU_ITEMS}
            categories={FOOD_MENU_CATEGORIES}
            defaultCategory={FOOD_MENU_CATEGORIES.APPETIZERS}
            limit={8}
            buttonFill="yellowOutline"
            buttonBorderRadius="full"
            fill="yellow"
            ctaButtonFill="yellowOutline"
            ctaButtonLink="/menu/food"
            ctaButtonText="View full menu"
          />
        </div>
      </div>
      <ImageGallery images={FOOD_IMAGES} />
    </section>
  );
};
