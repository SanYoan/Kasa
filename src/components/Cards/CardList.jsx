import datas from "../../datas/logements.json";
import { Link } from "react-router-dom";
import CreateCard from "./CreateCard";
import styles from "../Cards/cards.module.scss";

const CardList = () => {
  return (
    <section className={styles.container}>
      {datas.map((data) => (
        <Link key={data.id} to={`/rental/${data.id}`}>
          <CreateCard title={data.title} cover={data.cover} />
        </Link>
      ))}
    </section>
  );
};

export default CardList;
