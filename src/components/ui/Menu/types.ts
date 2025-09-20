import { HTMLAttributes } from "react";
import { ButtonVariants } from "../Button/types";

import { cva, VariantProps } from "class-variance-authority";

import styles from "./Menu.module.css";

export type Category = string;

export type Categories = Record<string, Category>;

export type MenuItem = {
  item: string;
  description: string;
  price: string;
  category: Category;
};

export type MenuItems = MenuItem[];

export const menuVariants = cva("", {
  variants: {
    fill: {
      yellow: styles.yellow_menu,
      red: styles.red_menu,
    },
  },
  defaultVariants: {
    fill: "red",
  },
});

export type MenuVariants = VariantProps<typeof menuVariants>;

export interface MenuProps
  extends HTMLAttributes<HTMLDivElement>,
    ButtonVariants,
    MenuVariants {
  items: MenuItems;
  categories: Categories;
  defaultCategory: Category;
  limit?: number;
}
