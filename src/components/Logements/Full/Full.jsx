import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../Carrousel/Carrousel.jsx";
import Description from "../../Description/Description.jsx";
import PropTypes from "prop-types";

function Full({ datas }) {
  const { id } = useParams();

  const currentHousing = datas.find((data) => data.id === id);

  if (!currentHousing) {
    return <Navigate to="/NotFound" />;
  }

  return (
    <div>
      <Carrousel
        pictures={currentHousing.pictures}
        title={currentHousing.title}
      />
      <Description currentHousing={currentHousing} />
    </div>
  );
}

Full.propTypes = {
  datas: PropTypes.array.isRequired,
};

export default Full;
