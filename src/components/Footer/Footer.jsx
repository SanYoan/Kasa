import logoWhite from "../../assets/kasa_white.svg";
import styles from "../Footer/footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src={logoWhite} alt="Logo Kasa blanc" />
        <p>&copy; 2020 - {currentYear} Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
