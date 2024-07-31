import styles from "../Cards/cards.module.scss";

const CardList = ({ datas }) => {
  return (
    <figure className={styles.container__card}>
      <h2 className={styles.card__title}>{datas.title}</h2>
      <div className={styles.degrade_img}></div>
      <img className={styles.card__img} src={datas.cover} alt={datas.title} />
    </figure>
  );
};

export default CardList;
