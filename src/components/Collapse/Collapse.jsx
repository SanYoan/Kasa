import React, { useState, useEffect } from "react";
import useCollapse from "../../utils/useCollapse";
import aboutData from "../../datas/about.json";
import styles from "../Collapse/collapse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(aboutData);
  }, []);

  if (sections.length === 0) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <SectionCollapse key={index} section={section} />
      ))}
    </div>
  );
}

function SectionCollapse({ section }) {
  const [isCollapsed, toggleCollapse] = useCollapse();

  return (
    <div className={styles.sectionCollapse}>
      <button onClick={toggleCollapse} className={styles.collapseButton}>
        {section.title}
        <FontAwesomeIcon
          icon={isCollapsed ? faChevronDown : faChevronUp}
          className={styles.icon}
        />
      </button>
      {!isCollapsed && (
        <div
          className={`${styles.content} ${isCollapsed ? "" : styles.active}`}
        >
          <div
            className={`${styles.contentCollapse} ${
              isCollapsed ? "" : styles.active
            }`}
          >
            {section.content}
          </div>
        </div>
      )}
    </div>
  );
}

export default Collapse;
