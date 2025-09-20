import { FC } from "react";
import classNames from "classnames";

import { ButtonProps, buttonVariants } from "./types";

export const Button: FC<ButtonProps> = ({
  className,
  buttonFill,
  buttonBorderRadius,
  ...props
}) => {
  return (
    <button
      className={classNames(
        className,
        buttonVariants({ buttonFill, buttonBorderRadius })
      )}
      {...props}
    />
  );
};
