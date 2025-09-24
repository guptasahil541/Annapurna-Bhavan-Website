import classNames from "classnames";
import Link from "next/link";

import { CTA, GoogleMap, ContentFrame } from "@/components/ui";

import styles from "./Contact.module.css";

import { CONTACT_INFO } from "@/constants/contact";

export const Contact = () => {
  return (
    <section id={styles.contact} className="vertical_padding">
      <div className={classNames("container", styles.contact_container)}>
        <h2>Get in touch</h2>
        <div className={styles.content_container}>
          <div className={styles.text_container}>
            <div className={styles.contact_info_outer_container}>
              <div className={styles.contact_info_inner_container}>
                <h3>Address</h3>
                <p className={styles.info}>{CONTACT_INFO.ADDRESS}</p>
              </div>
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
            <div className={styles.restaurant_timings_outer_container}>
              <div className={styles.restaurant_timings_inner_container}>
                <h3>Opening hours</h3>
                <div className={styles.timing_info_container}>
                  <p className={styles.info}>Monday - Friday</p>
                  <p className={styles.info}>
                    11:30 AM - 10:00 PM (Last walk-in - 9:15 PM)
                  </p>
                </div>
                <div className={styles.timing_info_container}>
                  <p className={styles.info}>Saturday - Sunday</p>
                  <p className={styles.info}>
                    11:30 AM - 11:00 PM (Last walk-in - 10:15 PM)
                  </p>
                </div>
              </div>
              <CTA />
            </div>
          </div>
          <ContentFrame>
            <GoogleMap />
          </ContentFrame>
        </div>
      </div>
    </section>
  );
};
