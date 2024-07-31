import PropTypes from "prop-types";
import CardList from "./Cards/CardList";
import Full from "./Full/Full.jsx";
import { Link } from "react-router-dom";

const Logements = ({ type, datas }) => {
  if (type === "Cards") {
    return (
      <div>
        <Link to={`/rental/${datas.id}`} key={datas.id}>
          <CardList datas={datas} />
        </Link>
      </div>
    );
  } else {
    return <Full datas={datas} />;
  }
};

Logements.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Logements;
