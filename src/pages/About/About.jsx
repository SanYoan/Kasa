import Banner from "../../components/Banner/Banner";
import Bannerimg from "../../assets/banner_about.webp";
import Collapse from "../../components/Collapse/Collapse";
import aboutDatas from "../../datas/about.json";

function About() {
  return (
    <main>
      <Banner imageUrl={Bannerimg} />
      <Collapse datas={aboutDatas} />
    </main>
  );
}

export default About;
