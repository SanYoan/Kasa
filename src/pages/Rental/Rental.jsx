import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Description from "../../components/Description/Description.jsx";
import datas from "../../datas/logements.json";

function Rental() {
  const { id } = useParams();

  const currentHousing = datas.find((data) => data.id === id);

  if (!currentHousing) {
    return <Navigate to="/NotFound" />;
  }

  return (
    <main>
      <Carrousel
        pictures={currentHousing.pictures}
        title={currentHousing.title}
      />
      <Description currentHousing={currentHousing} />
    </main>
  );
}

export default Rental;
