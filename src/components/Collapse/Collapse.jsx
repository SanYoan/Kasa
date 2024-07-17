import CreateCollapse from "./CreateCollapse";
import styles from "../Collapse/collapse.module.scss";

const Collapse = ({ datas }) => {
  return (
    <section className={styles.container}>
      {datas.map((data, index) => (
        <CreateCollapse
          key={index}
          title={data.title}
          content={<p>{data.content}</p>}
        />
      ))}
    </section>
  );
};

export default Collapse;
