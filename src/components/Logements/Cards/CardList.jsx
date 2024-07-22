import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CreateCard from "./createCard/CreateCard";
import styles from "../Cards/cards.module.scss";

const CardList = ({ datas }) => {
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

CardList.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
