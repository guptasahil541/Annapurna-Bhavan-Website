"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import gsap from "gsap";

import { useGSAP } from "@/utils/gsap";
import { Button } from "@/components";

import styles from "./Navbar.module.css";

import { NAV_LINKS } from "@/constants/links";

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const toggleTopRef = useRef<HTMLSpanElement | null>(null);
  const toggleBottomRef = useRef<HTMLSpanElement | null>(null);
  const overlayTl = useRef<GSAPTimeline>(null);
  const toggleTl = useRef<GSAPTimeline>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      overlayTl.current?.reverse();
      toggleTl.current?.reverse();
    } else {
      overlayTl.current?.play();
      toggleTl.current?.play();
    }
    setMenuOpen(!menuOpen);
  };

  useGSAP(() => {
    gsap.set(navRef.current, { yPercent: -100 });
    gsap.set([linksRef.current], {
      autoAlpha: 0,
      yPercent: -80,
      x: 60,
    });

    overlayTl.current = gsap
      .timeline({ paused: true })
      .set("body", { overflow: "hidden" })
      .to(navRef.current, {
        yPercent: 0,
        visibility: "visible",
        height: "100vh",
        duration: 0.6,
        ease: "power4.inOut",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          yPercent: 0,
          x: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power4.inOut",
        },
        "<0.2"
      );

    toggleTl.current = gsap
      .timeline({ paused: true })
      .to(toggleTopRef.current, {
        rotate: 45,
        y: 6.5,
        duration: 0.5,
        ease: "power4.inOut",
      })
      .to(
        toggleBottomRef.current,
        {
          rotate: -45,
          y: -3,
          duration: 0.5,
          ease: "power4.inOut",
        },
        "<"
      );
  });

  return (
    <nav id={styles.navbar}>
      <div className={classNames("container", styles.navbar_container)}>
        <div className={styles.navbar_left_container}>
          <Link href="/">
            <Image
              src="/logo-desktop.svg"
              height={35}
              width={275}
              alt="Annapurna Bhavan Logo"
              className={styles.logo_desktop}
            />
          </Link>
          <Link href="/">
            <Image
              src="/logo-mobile.svg"
              height={35}
              width={35}
              alt="Annapurna Bhavan Logo"
              className={styles.logo_mobile}
            />
          </Link>
        </div>
        <div className={styles.navbar_right_container}>
          <Link href="/book/table">
            <Button buttonSize="small">Book a table</Button>
          </Link>
          <div className={styles.navbar_toggle} onClick={toggleMenu}>
            <span
              ref={toggleTopRef}
              className={styles.navbar_toggle_top}
            ></span>
            <span
              ref={toggleBottomRef}
              className={styles.navbar_toggle_bottom}
            ></span>
          </div>
        </div>
        <div ref={navRef} className={styles.navbar_overlay}>
          <div className="container">
            <ul className={styles.navbar_links_container}>
              {NAV_LINKS.map((link, index) => {
                return (
                  <Link
                    ref={(el) => {
                      linksRef.current[index] = el;
                    }}
                    href={link.path}
                    key={index}
                    onClick={toggleMenu}
                  >
                    <li className={styles.navbar_link}>{link.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
