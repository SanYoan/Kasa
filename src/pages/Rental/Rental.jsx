import Logements from "../../components/Logements/Logements.jsx";
import LogementsDatas from "../../datas/logements.json";

function Rental() {
  return (
    <main>
      <Logements datas={LogementsDatas} type="Full" />
    </main>
  );
}

export default Rental;
