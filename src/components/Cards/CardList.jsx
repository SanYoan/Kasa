import datas from "../../datas/logements.json";
import CreateCard from "./CreateCard";
import styles from "../Cards/cards.module.scss";

const CardList = () => {
  return (
    <section className={styles.container}>
      {datas.map((datas) => (
        <CreateCard
          key={datas.id}
          id={datas.id}
          title={datas.title}
          cover={datas.cover}
        />
      ))}
    </section>
  );
};

export default CardList;
