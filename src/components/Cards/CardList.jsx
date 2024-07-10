import React from "react";
import datas from "../../datas/logements.json";
import Createcard from "../Cards/Createcard";
import styles from "../Cards/cards.module.scss";

const CardList = () => {
  return (
    <div className={styles.container}>
      {datas.map((datas) => (
        <Createcard
          key={datas.id}
          id={datas.id}
          title={datas.title}
          cover={datas.cover}
        />
      ))}
    </div>
  );
};

export default CardList;
