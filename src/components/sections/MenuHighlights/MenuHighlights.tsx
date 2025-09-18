import classNames from "classnames";

import { Button } from "@/components/ui";

import styles from "./MenuHighlights.module.css";

export const MenuHighlights = () => {
  return (
    <section id={styles.menu_highlights}>
      <div
        className={classNames("container", styles.menu_hightlights_container)}
      >
        <h2 className={styles.menu_highlights_heading}>
          Discover some of our favourites
        </h2>
        <Button fill="yellowOutline">View menu</Button>
      </div>
    </section>
  );
};
