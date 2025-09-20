import { HTMLAttributes } from "react";

export type Category = string;

export type Categories = Record<string, Category>;

export type MenuItem = {
  item: string;
  description: string;
  price: string;
  category: Category;
};

export type MenuItems = MenuItem[];

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  items: MenuItems;
  categories: Categories;
  defaultCategory: Category;
  limit?: number;
}
