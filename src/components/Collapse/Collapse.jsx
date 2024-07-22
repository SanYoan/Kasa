import CreateCollapse from "../Collapse/createCollapse/CreateCollapse.jsx";
import styles from "../Collapse/collapse.module.scss";

const Collapse = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <CreateCollapse title={title} content={content} />
    </div>
  );
};

export default Collapse;
