import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { Hero, ContentFrame, ContactForm } from "@/components";

import styles from "./page.module.css";

import { CONTACT_INFO } from "@/constants/contact";

export default function ContactUs() {
  return (
    <main id={styles.main}>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=5061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="Hero background image"
        height={1080}
        width={1920}
        containerHeight="60svh"
      >
        <h1>Contact us</h1>
      </Hero>
      <section
        className={classNames(
          "container vertical_padding",
          styles.contact_us_container
        )}
      >
        <div className={styles.content_container}>
          <ContentFrame>
            <Image
              src="https://images.unsplash.com/photo-1593560704563-f176a2eb61db?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact us companion image"
              width={1920}
              height={1920}
              className={styles.side_image}
            />
          </ContentFrame>
          <div className={styles.form_container}>
            <ContactForm />
            <div className={styles.contact_info_outer_container}>
              <div className={styles.contact_info_inner_container}>
                <h3>Call us</h3>
                <p className={styles.info}>
                  <Link href={`tel:${CONTACT_INFO.PHONE}`}>
                    {CONTACT_INFO.PHONE}
                  </Link>
                </p>
              </div>
              <div className={styles.contact_info_inner_container}>
                <h3>Mail us</h3>
                <p className={styles.info}>
                  <Link href={`mailto:${CONTACT_INFO.EMAIL}`}>
                    {CONTACT_INFO.EMAIL}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
