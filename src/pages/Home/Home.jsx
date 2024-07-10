import Banner from "../../components/Banner/Banner.jsx";
import bannerImg from "../../assets/banner_home.webp";
import CardList from "../../components/Cards/CardList.jsx";

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
        opacity={0.6}
        isVisible={true}
      />
      <CardList />
    </main>
  );
}

export default Home;
