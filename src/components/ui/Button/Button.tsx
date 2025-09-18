import { FC } from "react";
import classNames from "classnames";

import { ButtonProps, buttonVariants } from "./types";

export const Button: FC<ButtonProps> = ({
  className,
  fill,
  borderRadius,
  ...props
}) => {
  return (
    <button
      className={classNames(className, buttonVariants({ fill, borderRadius }))}
      {...props}
    />
  );
};
