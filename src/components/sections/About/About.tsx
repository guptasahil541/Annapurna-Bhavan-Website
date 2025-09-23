import classNames from "classnames";
import Image from "next/image";

import { CTA, ContentFrame } from "@/components/ui";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section id={styles.about} className="vertical_padding">
      <div className={classNames("container ", styles.about_container)}>
        <h2>About the restaurant</h2>
        <div className={styles.content_container}>
          <div className={styles.text_content_container}>
            <div className={styles.text_container}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
            <CTA />
          </div>
          <ContentFrame>
            <Image
              src="https://images.unsplash.com/photo-1559561724-732dbca7be1e?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about image"
              height={2400}
              width={1920}
              className={styles.about_image}
            />
          </ContentFrame>
        </div>
      </div>
    </section>
  );
};
