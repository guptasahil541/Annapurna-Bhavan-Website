import classNames from "classnames";

import { ContentFrameProps } from "./types";

import styles from "./ContentFrame.module.css";

export const ContentFrame: React.FC<ContentFrameProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.content_frame_container, className)}
      {...props}
    />
  );
};
