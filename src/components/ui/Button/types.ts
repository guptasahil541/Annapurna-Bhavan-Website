import { cva, VariantProps } from "class-variance-authority";

import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.css";

export const buttonVariants = cva(styles.default_button, {
  variants: {
    buttonFill: {
      red: styles.red_button,
      darkRed: styles.dark_red_button,
      redOutline: styles.red_outline_button,
      darkRedOutline: styles.dark_red_outline_button,
      yellowOutline: styles.yellow_outline_button,
    },
    buttonBorderRadius: {
      full: styles.full_radius_button,
      partial: styles.partial_radius_button,
    },
  },
  defaultVariants: {
    buttonFill: "red",
    buttonBorderRadius: "partial",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}
