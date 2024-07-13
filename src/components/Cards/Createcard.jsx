import PropTypes from "prop-types";
import styles from "../Cards/cards.module.scss";
import { Link } from "react-router-dom";

const Card = ({ title, cover }) => {
  return (
    <figure className={styles.container__card}>
      <Link to="/rental">
        {" "}
        <h2 className={styles.card__title}>{title}</h2>
        <img className={styles.card__img} src={cover} alt={title} />
      </Link>
    </figure>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
