import { Outlet, NavLink } from "react-router-dom";
import "../styles/navigationActive.css";
import styles from "../styles/navigation.module.css";
import About from "../components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboard,
  faBook,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
  const links = [
    {
      path: "/",
      label: "사용방법",
      exact: "true",
      end: "true",
      icon: faHouse,
    },
    {
      path: "/ingredient",
      label: "재료 추가하기",
      exact: "false",
      end: "false",
      icon: faClipboard,
    },
    {
      path: "/foodCost",
      label: "원가 계산기",
      exact: "false",
      end: "false",
      icon: faBook,
    },
  ];
  const [mobileActive, setMobileActive] = useState(false);
  const onClickMobileBtn = () => {
    setMobileActive((cur) => !cur);
    console.log(mobileActive);
  };
  return (
    <div className={
      mobileActive ? `${styles.wrap} ${styles.wrapOpen}` : `${styles.wrap} ${styles.wrapClose}`
    }>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>FOOCO</h1>
        <About />
        <ul>
          {links.map(({ path, label, exact, end, icon }) => (
            <li key={label}>
              <NavLink to={path} exact={exact} end={end}>
                <FontAwesomeIcon icon={icon} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
      <div
        onClick={onClickMobileBtn}
        className={
          !mobileActive ? `${styles.mobile} ${styles.open}` : `${styles.mobile} ${styles.close}`
        }
      ><FontAwesomeIcon icon={faCaretRight}/></div>
    </div>
  );
};

export default Navigation;