import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/kasa_red.svg";
import styles from "../Header/header.module.scss";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.navbar__imglink}>
          <img src={logoKasa} alt="Logo du site Kasa" />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar__link} ${styles.active}`
                  : styles.navbar__link
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
