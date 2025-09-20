"use client";

import { MenuProps, menuVariants } from "./types";

import { useState, useMemo } from "react";
import classNames from "classnames";

import { Button } from "@/components";

import styles from "./Menu.module.css";

export const Menu: React.FC<MenuProps> = ({
  items,
  categories,
  defaultCategory,
  limit = items.length,
  buttonFill,
  buttonBorderRadius,
  fill,
  ...props
}) => {
  const [currentCategory, setCurrentCategory] = useState(defaultCategory);

  const menuItems = useMemo(
    () =>
      items.filter((item) => item.category === currentCategory).slice(0, limit),
    [currentCategory]
  );

  return (
    <div
      className={classNames(styles.menu_container, menuVariants({ fill }))}
      {...props}
    >
      <div className={styles.menu_categories_container}>
        {Object.values(categories).map((category, index) => {
          return (
            <Button
              onClick={() => setCurrentCategory(category)}
              data-selected={category === currentCategory}
              buttonFill={buttonFill}
              buttonBorderRadius={buttonBorderRadius}
              className={styles.menu_category}
              key={index}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className={styles.menu_items_container}>
        {menuItems.map((menuItem, index) => {
          return (
            <div className={styles.menu_item_container} key={index}>
              <div className={styles.menu_item_and_price_container}>
                <p className={styles.menu_item}>{menuItem.item}</p>
                <p className={styles.menu_item_price}>{menuItem.price}</p>
              </div>
              <p className={styles.menu_item_description}>
                {menuItem.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
