import Image from "next/image";
import classNames from "classnames";

import { Form } from "@/components";

import styles from "./page.module.css";

export default function BookATable() {
  return (
    <main id={styles.main}>
      <div
        className={classNames(
          "container vertical_padding",
          styles.booking_container
        )}
      >
        <h1 className={styles.heading}>Book a table</h1>
        <div className={styles.content_container}>
          <div className={styles.image_container}>
            <Image
              src={
                "https://images.unsplash.com/photo-1728910758653-7e990e489cac?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Book a table companion image"
              width={1920}
              height={1920}
              className={styles.book_a_table_image}
            />
          </div>
          <div className={styles.form_container}>
            <Form />
            <div className={styles.cancellation_policy_container}>
              <p className={styles.cancellation_heading}>Cancellation policy</p>
              <p className={styles.cancellation_text}>
                Please note, our cancellation policies vary in line with the
                time and size of your reservation, and the corresponding menus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
