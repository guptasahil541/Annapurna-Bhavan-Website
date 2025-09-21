import { MenuItems, Categories } from "@/components/ui/Menu/types";

export const DRINKS_MENU_CATEGORIES: Categories = {
  BEVERAGES: "Beverages",
  CAN_SODA: "Can Soda",
};

export const DRINKS_MENU_ITEMS: MenuItems = [
  // ---- APPETIZERS ----
  {
    item: "Mango Lassi",
    description:
      "Delicious Ratnagiri Mango pulp churned with yogurt & sprinkled with Kerala cardamom.",
    price: "$6.95",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Fresh – Brewed Iced Tea",
    description:
      "Made from freshly brewed premium Darjeeling tea | Unsweetened.",
    price: "$3.95",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Perrier / Pellegrino",
    description: "",
    price: "$4.95/500 ml",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Pomegranate Juice",
    description:
      "Refreshing, rejuvenating, tart, organic pomegranate juice without added sugar.",
    price: "$7.95",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Fresh Ginger & Mint Lemonade",
    description:
      "A refreshing all-American drink with the goodness of ginger, mint, rock salt, cumin powder, and sugar.",
    price: "$5.95",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Spring Water",
    description: "",
    price: "$2.25/500 ml",
    category: DRINKS_MENU_CATEGORIES.BEVERAGES,
  },
  {
    item: "Coke",
    description: "",
    price: "$2.95",
    category: DRINKS_MENU_CATEGORIES.CAN_SODA,
  },
  {
    item: "Sprite",
    description: "",
    price: "$2.95",
    category: DRINKS_MENU_CATEGORIES.CAN_SODA,
  },
  {
    item: "Seltzer",
    description: "",
    price: "$2.95",
    category: DRINKS_MENU_CATEGORIES.CAN_SODA,
  },
  {
    item: "Diet Coke",
    description: "",
    price: "$2.95",
    category: DRINKS_MENU_CATEGORIES.CAN_SODA,
  },
  {
    item: "Ginger Ale",
    description: "",
    price: "$2.95",
    category: DRINKS_MENU_CATEGORIES.CAN_SODA,
  },
];
