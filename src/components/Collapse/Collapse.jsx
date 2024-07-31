import styles from "../Collapse/collapse.module.scss";
import PropTypes from "prop-types";
import useCollapse from "../../utils/useCollapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isCollapsed, toggleCollapse] = useCollapse();
  let contents = "";
  if (Array.isArray(content)) {
    contents = (
      <ul>
        {content.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    );
  } else {
    contents = <p>{content}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionCollapse}>
        <button onClick={toggleCollapse} className={styles.collapseButton}>
          {title}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.icon} ${!isCollapsed ? styles.rotate : ""}`}
          />
        </button>

        <div
          className={`${styles.content} ${isCollapsed ? "" : styles.active}`}
        >
          <div
            className={`${styles.contentCollapse} ${
              isCollapsed ? "" : styles.active
            }`}
          >
            {contents}
          </div>
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
