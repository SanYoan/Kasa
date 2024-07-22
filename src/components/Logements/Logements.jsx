import React from "react";
import PropTypes from "prop-types";
import CardList from "./Cards/CardList";
import Full from "./Full/Full.jsx";
import logementsData from "../../datas/logements.json";

const Logements = ({ type, datas = logementsData }) => {
  if (!Array.isArray(datas)) {
    console.error("Error:", datas);
    return null;
  }

  if (type === "Cards") {
    return <CardList datas={datas} />;
  } else {
    return <Full datas={datas} />;
  }
};

Logements.propTypes = {
  type: PropTypes.string.isRequired,
  datas: PropTypes.array,
};

export default Logements;
