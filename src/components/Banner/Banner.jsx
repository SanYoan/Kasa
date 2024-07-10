import PropTypes from "prop-types";
import styles from "../Banner/banner.module.scss";

const Banner = ({ imageUrl, title, opacity, isVisible }) => {
  const overlayStyle = {
    opacity: opacity,
    background: "black",
  };
  return (
    <div className={styles.banner}>
      <div className={styles.banner__overlay} style={overlayStyle}></div>
      <img src={imageUrl} alt="Banner" className={styles.banner__image} />
      {isVisible && <h1 className={styles.banner__title}>{title}</h1>}
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.node.isRequired,
  title: PropTypes.node,
  opacity: PropTypes.number,
  isVisible: PropTypes.bool.isRequired,
};

export default Banner;
