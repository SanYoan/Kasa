import Banner from "../../components/Banner/Banner";
import Bannerimg from "../../assets/banner_about.webp";
import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <main>
      <Banner
        imageUrl={Bannerimg}
        title={<></>}
        opacity={0.6}
        isVisible={true}
      />
      <Collapse />
    </main>
  );
}

export default About;
