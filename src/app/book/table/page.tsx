import Image from "next/image";
import classNames from "classnames";

import { Hero, TableReservationForm, ContentFrame } from "@/components";

import styles from "../page.module.css";

export default function BookATable() {
  return (
    <main id={styles.main}>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=5040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Hero background image"
        height={1080}
        width={1920}
        containerHeight="60svh"
      >
        <h1>Book A Table</h1>
      </Hero>
      <div
        className={classNames(
          "container vertical_padding",
          styles.booking_container
        )}
      >
        <div className={styles.content_container}>
          <ContentFrame>
            <Image
              src="https://images.unsplash.com/photo-1728910758653-7e990e489cac?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Book a table companion image"
              width={1920}
              height={1920}
              className={styles.side_image}
            />
          </ContentFrame>
          <div className={styles.form_container}>
            <TableReservationForm />
            <div className={styles.sub_info_container}>
              <p className={styles.sub_info_heading}>Cancellation policy</p>
              <p className={styles.sub_info_text}>
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
