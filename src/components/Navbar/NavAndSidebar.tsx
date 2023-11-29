"use client"
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import styles from "./NavAndSidebar.module.css";
import { navRoutes } from "./NavLinks";
import Image from "next/image";

const NavAndSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <header className={styles.navbarAndSidebar}>
      {/* NAVBAR PART */}
      <nav className={styles.navbarContainer}>
        <div className={styles.navbarContainerWrapper}>
          {/* LEFT NAVBAR */}
          <div className={styles.navbarContainerLeft}>
            <div className={styles.navbarContainerHamburger}>
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#F48101"
              />
            </div>
            <div className="">
              <Link href="/">
                <Image
                  src="/imgs/svg/logo.svg"
                  alt=""
                  width={240}
                  height={37}
                  className={styles.navbarContainerLogo}
                  style={{marginTop:"10px"}}
                  // layout="responsive" 
                />
              </Link>
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className={styles.navbarContainerRightItems}>
            {navRoutes.map((item) => (
              <div key={item.name} className={styles.navbarContainerRightItem}>
                <Link href={item.route} className={styles.navlink}>
                  {/* <a className={`${styles.link} ${router.pathname === item.route ? styles.activeClassNameOfSidebar : ""}`}>
                    {item.name}
                  </a> */}
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* SIDEBAR PART */}
      <div className={openSidebar ? styles.sidebarBackground : ""}>
        <div
          className={`${openSidebar ? styles.translateForSidebar : styles.translateForSidebarNeg} ${styles.setSidebarForToggle} ${styles.transform} ${styles.transitionAll} ${styles.duration}`}
        >
          <div className={styles.sidebarTop}>
            <Image
              src="/imgs/png/bee.png"
              alt=""
              width={64}
              height={64}
            />
            <Hamburger
                    toggle={setOpenSidebar}
                    toggled={openSidebar}
                    color="#F48101"
            />
          </div>
          <ul className={styles.SidebarItems}>
            {navRoutes.map((item) => (
              <li key={item.name} className={styles.SidebarItem}>
                <Link href={item.route} className={styles.link}>
                  {/* <a className={`${styles.link} ${router.pathname === item.route ? styles.activeClassNameOfSidebar : ""}`}>
                    {item.name}
                  </a> */}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.bee2}>
            <Image
                src="/imgs/png/bee.png"
                alt=""
                width={64}
                height={64}
            />
          </div>
          <div className={styles.bee3}>
            <Image
                src="/imgs/png/bee.png"
                alt=""
                width={64}
                height={64}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavAndSidebar;
