import Banner from "../../components/Banner/Banner.jsx";
import bannerImg from "../../assets/banner_home.webp";
import Logements from "../../components/Logements/Logements.jsx";
import LogementsDatas from "../../datas/logements.json";
import styles from "../../components/Logements/Cards/cards.module.scss";

function Home() {
  document.title = `Kasa - Accueil`;
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
      <section className={styles.container}>
        {LogementsDatas.map((data) => (
          <Logements datas={data} key={data.id} type="Cards" />
        ))}
      </section>
    </main>
  );
}

export default Home;
