import classNames from "classnames";

import { Button, Menu } from "@/components/ui";

import styles from "./MenuHighlights.module.css";

import { FOOD_MENU_CATEGORIES, FOOD_MENU_ITEMS } from "@/constants/foodMenu";

export const MenuHighlights = () => {
  return (
    <section id={styles.menu_highlights}>
      <div
        className={classNames("container", styles.menu_hightlights_container)}
      >
        <h2 className={styles.menu_highlights_heading}>
          Discover some of our favourites
        </h2>
        <Menu
          items={FOOD_MENU_ITEMS}
          categories={FOOD_MENU_CATEGORIES}
          defaultCategory={FOOD_MENU_CATEGORIES.APPETIZERS}
          limit={8}
        />
        <Button fill="yellowOutline">View menu</Button>
      </div>
    </section>
  );
};
