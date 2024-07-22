import Banner from "../../components/Banner/Banner.jsx";
import bannerImg from "../../assets/banner_home.webp";
import Logements from "../../components/Logements/Logements.jsx";

function Home() {
  return (
    <main>
      <Banner
        imageUrl={bannerImg}
        title={
          <>
            Chez vous, <span>partout et ailleurs</span>
          </>
        }
      />
      <Logements type="Cards" />
    </main>
  );
}

export default Home;
