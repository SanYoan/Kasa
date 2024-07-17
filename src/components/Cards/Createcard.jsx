import PropTypes from "prop-types";
import styles from "../Cards/cards.module.scss";
import datas from "../../datas/logements.json";

const Card = ({ title, cover }) => {
  return (
    <figure key={datas.id} className={styles.container__card}>
      <h2 className={styles.card__title}>{title}</h2>
      <div className={styles.degrade_img}></div>
      <img className={styles.card__img} src={cover} alt={title} />
    </figure>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
