import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import styles from "./Footer.module.css";

import { QUICK_LINKS, MENU_LINKS, SITE_LINKS } from "@/constants/links";

export const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={classNames("container", styles.footer_container)}>
        <div className={styles.footer_top_container}>
          <div className={styles.footer_logo_container}>
            <Link href="/">
              <Image
                src="/logo-desktop.svg"
                height={35}
                width={275}
                quality={100}
                alt="Annapurna Bhavan Logo"
              />
            </Link>
          </div>
          <div className={styles.footer_navigation_outer_container}>
            <div className={styles.footer_navigation_inner_container}>
              <span className={styles.footer_navigation_heading}>
                Quick Links
              </span>
              <ul className={styles.footer_navigation}>
                {QUICK_LINKS.map((link, index) => {
                  return (
                    <li className={styles.footer_navigation_link} key={index}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_navigation_inner_container}>
              <span className={styles.footer_navigation_heading}>Menu</span>
              <ul className={styles.footer_navigation}>
                {MENU_LINKS.map((link, index) => {
                  return (
                    <li className={styles.footer_navigation_link} key={index}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer_navigation_inner_container}>
              <span className={styles.footer_navigation_heading}>Site</span>
              <ul className={styles.footer_navigation}>
                {SITE_LINKS.map((link, index) => {
                  return (
                    <li className={styles.footer_navigation_link} key={index}>
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom_container}>
          <p className={styles.footer_copyright}>
            © 2025 | All rights reserved
          </p>
          <div className={styles.footer_social_links_container}>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={styles.footer_social_link}
              >
                <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
