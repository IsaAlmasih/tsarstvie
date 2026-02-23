"use client";
import React, { useState } from "react";

import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "next/link";

import Image from "next/image";

import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const headerClasses = clsx(styles.header, {
    [styles.isVisible]: isVisible,
  });
  return (
    <div className={styles.wrapper}>
      <header className={headerClasses}>
        <Link className={styles.logo} href={"/tsarstvie/almasih/gallery"}>
          <Image src={logo} width={450} height={440} alt="logo" />
        </Link>
      </header>
      <div></div>
    </div>
  );
};

export default Header;
