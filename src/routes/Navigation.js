import { Outlet, NavLink } from "react-router-dom";
import "../styles/navigationActive.css";
import styles from "../styles/navigation.module.css";
import About from "../components/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboard,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const links = [
    {
      path: "/",
      label: "Home",
      exact: "true",
      end: "true",
      icon: faHouse,
    },
    {
      path: "/ingredient",
      label: "Add Ingredient",
      exact: "false",
      end: "false",
      icon: faClipboard,
    },
    {
      path: "/foodCost",
      label: "Food Cost",
      exact: "false",
      end: "false",
      icon: faBook,
    },
  ];
  return (
    <div className={styles.wrap}>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navigation;
