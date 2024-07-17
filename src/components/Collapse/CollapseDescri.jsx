import CreateCollapse from "./CreateCollapse";
import styles from "../Collapse/collapse.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CollapseDescri = ({ datas }) => {
  if (!Array.isArray(datas)) {
    console.error("Expected an array but received:", datas);
    return null;
  }

  return (
    <section className={styles.containerHost}>
      {datas.map((data, index) => (
        <div className={styles.containerHostCollapse} key={index}>
          <CreateCollapse title="Description" content={data.description} />
          <CreateCollapse
            title="Equipements"
            content={
              <ul className={styles.equipmentList}>
                {data.equipments.map((equipment, eqIndex) => (
                  <li key={eqIndex} className={styles.equipmentItem}>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={styles.equipmentIcon}
                    />
                    {equipment}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      ))}
    </section>
  );
};

export default CollapseDescri;
