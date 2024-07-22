import Banner from "../../components/Banner/Banner";
import Bannerimg from "../../assets/banner_about.webp";
import Collapse from "../../components/Collapse/Collapse";
import aboutDatas from "../../datas/about.json";
import styles from "../../components/Collapse/collapse.module.scss";

function About() {
  return (
    <main>
      <Banner imageUrl={Bannerimg} />
      <section className={styles.sectionCollapse}>
        {aboutDatas.map((data, index) => (
          <Collapse
            key={index}
            title={data.title}
            content={<p>{data.content}</p>}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
