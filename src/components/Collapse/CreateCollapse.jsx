import React from "react";
import PropTypes from "prop-types";
import useCollapse from "../../utils/useCollapse";
import styles from "../Collapse/collapse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CreateCollapse = ({ title, content }) => {
  const [isCollapsed, toggleCollapse] = useCollapse();

  return (
    <div className={styles.sectionCollapse}>
      <button onClick={toggleCollapse} className={styles.collapseButton}>
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.icon} ${!isCollapsed ? styles.rotate : ""}`}
        />
      </button>

      <div className={`${styles.content} ${isCollapsed ? "" : styles.active}`}>
        <p
          className={`${styles.contentCollapse} ${
            isCollapsed ? "" : styles.active
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

CreateCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CreateCollapse;
