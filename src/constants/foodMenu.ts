import { MenuItems, Categories } from "@/components/ui/Menu/types";

export const FOOD_MENU_CATEGORIES: Categories = {
  APPETIZERS: "Appetizers",
  TANDOORI_DELICACIES: "Tandoori Delicacies",
  INDIAN_BREADS: "Indian Breads",
  RICE_AND_BIRYANIS: "Rice & Biryanis",
  DESSERTS: "Desserts",
};

export const FOOD_MENU_ITEMS: MenuItems = [
  // ---- APPETIZERS ----
  {
    item: "Aloo Tikki | Potato Patties (VEG)",
    description:
      "Mashed potato cakes with spices, cilantro, onion, ginger, green chili.",
    price: "$8.95/2 pcs",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Vegetable Samosa",
    description: "Crispy pastry filled with potatoes, peas, and mild spices.",
    price: "$6.95/2 pcs",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Paneer Pakora",
    description:
      "Cottage cheese fritters dipped in chickpea batter, fried golden.",
    price: "$9.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Onion Bhaji",
    description: "Crispy onion fritters served with tangy chutneys.",
    price: "$7.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Veg Spring Rolls",
    description:
      "Crispy rolls stuffed with mixed vegetables, served with chili sauce.",
    price: "$8.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Chili Paneer",
    description:
      "Indo-Chinese style paneer tossed with bell peppers, onions & chili sauce.",
    price: "$11.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Papdi Chaat",
    description:
      "Crispy wafers topped with yogurt, chickpeas, chutneys, and spices.",
    price: "$9.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Dahi Puri",
    description:
      "Crispy puris filled with potatoes, yogurt, chutneys, and sev.",
    price: "$9.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Hara Bhara Kebab",
    description: "Spinach and green pea patties flavored with ginger & spices.",
    price: "$10.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },
  {
    item: "Paneer 65",
    description:
      "Crispy paneer cubes tossed with curry leaves, chilies, and spices.",
    price: "$11.95",
    category: FOOD_MENU_CATEGORIES.APPETIZERS,
  },

  // ---- TANDOORI DELICACIES ----
  {
    item: "Paneer Tikka",
    description:
      "Chunks of cottage cheese marinated with spices and cooked in tandoor.",
    price: "$14.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Tandoori Mushroom",
    description:
      "Juicy button mushrooms marinated in spices, roasted in tandoor.",
    price: "$13.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Tandoori Broccoli",
    description:
      "Florets marinated with yogurt, cheese & herbs, grilled in tandoor.",
    price: "$12.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Malai Paneer Tikka",
    description: "Paneer cubes marinated in cream, cashew & yogurt, grilled.",
    price: "$15.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Achari Paneer Tikka",
    description:
      "Paneer marinated with tangy pickle spices, roasted in clay oven.",
    price: "$15.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Tandoori Cauliflower (Gobi Tikka)",
    description: "Cauliflower florets marinated in spices, roasted golden.",
    price: "$13.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Soya Chaap Tikka",
    description:
      "Plant-based soya chaap skewers marinated and cooked in tandoor.",
    price: "$14.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Stuffed Paneer Tikka",
    description:
      "Paneer slices stuffed with mint & spices, grilled in clay oven.",
    price: "$16.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Veg Seekh Kebab",
    description:
      "Mixed vegetable skewers flavored with herbs, grilled in tandoor.",
    price: "$12.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },
  {
    item: "Tandoori Platter (VEG)",
    description:
      "Assortment of paneer tikka, mushroom tikka, soya chaap & kebabs.",
    price: "$26.95",
    category: FOOD_MENU_CATEGORIES.TANDOORI_DELICACIES,
  },

  // ---- INDIAN BREADS ----
  {
    item: "Plain Naan",
    description: "Soft leavened white bread baked in clay oven.",
    price: "$3.50",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Butter Naan",
    description: "Classic naan with a spread of melted butter.",
    price: "$3.95",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Garlic Naan",
    description: "Naan topped with garlic and cilantro.",
    price: "$4.50",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Cheese Naan",
    description: "Naan stuffed with cheddar & mozzarella cheese.",
    price: "$5.95",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Onion Kulcha",
    description: "Naan stuffed with spiced onions and herbs.",
    price: "$5.50",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Paneer Kulcha",
    description: "Stuffed naan with spiced paneer filling.",
    price: "$5.95",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Lachha Paratha",
    description: "Multi-layered flaky whole wheat bread.",
    price: "$4.95",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Tandoori Roti",
    description: "Whole wheat flatbread baked in clay oven.",
    price: "$3.25",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Aloo Paratha",
    description: "Stuffed bread with spiced mashed potatoes.",
    price: "$5.50",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },
  {
    item: "Missi Roti",
    description:
      "Gram flour and wheat bread with spices, roasted in clay oven.",
    price: "$4.25",
    category: FOOD_MENU_CATEGORIES.INDIAN_BREADS,
  },

  // ---- RICE & BIRYANIS ----
  {
    item: "Plain Basmati Rice",
    description: "Steamed long-grain aromatic basmati rice.",
    price: "$4.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Jeera Rice",
    description: "Basmati rice tempered with cumin seeds.",
    price: "$5.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Vegetable Pulao",
    description: "Rice cooked with mixed vegetables and mild spices.",
    price: "$9.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Veg Biryani",
    description: "Fragrant rice layered with spiced vegetables & herbs.",
    price: "$13.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Paneer Biryani",
    description: "Rice layered with spiced paneer, fried onions, and herbs.",
    price: "$15.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Mushroom Biryani",
    description: "Aromatic basmati rice cooked with mushrooms and spices.",
    price: "$14.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Soya Chaap Biryani",
    description: "Rice flavored with spices & marinated soya chaap.",
    price: "$15.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Veg Fried Rice",
    description:
      "Indo-Chinese style rice tossed with vegetables and soy sauce.",
    price: "$11.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Corn Pulao",
    description: "Steamed rice flavored with sweet corn and light spices.",
    price: "$10.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },
  {
    item: "Kashmiri Pulao",
    description: "Sweet pulao with dry fruits, nuts, saffron, and pineapple.",
    price: "$12.95",
    category: FOOD_MENU_CATEGORIES.RICE_AND_BIRYANIS,
  },

  // ---- DESSERTS ----
  {
    item: "Gulab Jamun",
    description: "Milk-solid dumplings soaked in sugar syrup.",
    price: "$6.95/2 pcs",
    category: FOOD_MENU_CATEGORIES.DESSERTS,
  },
  {
    item: "Rasmalai",
    description: "Cottage cheese patties soaked in sweet saffron milk.",
    price: "$7.95/2 pcs",
    category: FOOD_MENU_CATEGORIES.DESSERTS,
  },
  {
    item: "Kheer (Rice Pudding)",
    description: "Creamy rice pudding flavored with cardamom & nuts.",
    price: "$6.95",
    category: FOOD_MENU_CATEGORIES.DESSERTS,
  },
  {
    item: "Kulfi (Mango/Pistachio)",
    description: "Traditional Indian ice cream, rich & creamy.",
    price: "$7.95",
    category: FOOD_MENU_CATEGORIES.DESSERTS,
  },
];
