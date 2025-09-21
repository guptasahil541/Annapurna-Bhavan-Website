import classNames from "classnames";

import { CTA, GoogleMap } from "@/components/ui";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id={styles.contact}>
      <div className={classNames("container", styles.contact_container)}>
        <div className={styles.content_container}>
          <h2>Get in touch</h2>
          <div className={styles.text_container}>
            <div className={styles.contact_info_outer_container}>
              <div className={styles.contact_info_inner_container}>
                <h3>Address</h3>
                <p className={styles.info}>
                  615 9th Avenue (Between 43rd & 44th Street, Manhattan) New
                  York City, NY 10036
                </p>
              </div>
              <div className={styles.contact_info_inner_container}>
                <h3>Call us</h3>
                <p className={styles.info}>212-981-7000 </p>
              </div>
              <div className={styles.contact_info_inner_container}>
                <h3>Mail us</h3>
                <p className={styles.info}>annapurnabhawan@gmail.com</p>
              </div>
            </div>
            <div className={styles.restaurant_timings_container}>
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
              <CTA />
            </div>
          </div>
        </div>
        <div className={styles.map_container}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};
