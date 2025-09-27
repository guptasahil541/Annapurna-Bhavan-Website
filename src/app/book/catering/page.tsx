import Image from "next/image";
import classNames from "classnames";

import { Hero, CateringForm, ContentFrame } from "@/components";

import styles from "../page.module.css";

export default function BookCatering() {
  return (
    <main id={styles.main}>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Hero background image"
        height={1080}
        width={1920}
        containerHeight="60svh"
      >
        <h1>Book Catering</h1>
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
              src="https://images.unsplash.com/photo-1717587052948-fb9825de50f8?q=80&w=3241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Book a table companion image"
              width={1920}
              height={1920}
              className={styles.side_image}
            />
          </ContentFrame>
          <div className={styles.form_container}>
            <CateringForm />
            <div className={styles.sub_info_container}>
              <p className={styles.sub_info_text}>
                Our team works closely with you to create a customized menu that
                suits your preferences and ensures a memorable dining experience
                for your guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
