import CollapseDescri from "../Collapse/CollapseDescri.jsx";
import styles from "./description.module.scss"; // Assurez-vous que le chemin est correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

function Description({ currentHousing }) {
  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: i < rating ? "rgb(255, 96, 96)" : "#ccc" }}
        />
      );
    }

    return stars;
  };

  return (
    <section className={styles.description}>
      <div className={styles.topDescri}>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>{currentHousing.title}</h1>
          <p className={styles.localisation}>{currentHousing.location}</p>
          <div className={styles.tagsContent}>
            {currentHousing.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.hostContent}>
          <div className={styles.host}>
            <p className={styles.hostName}>
              {currentHousing.host.name.split(" ").map((part, index) => (
                <Fragment key={index}>
                  {part}
                  {index === 0 && <br />}
                </Fragment>
              ))}
            </p>
            <img
              className={styles.hostPicture}
              src={currentHousing.host.picture}
              alt={currentHousing.host.name}
            />
          </div>
          <div className={styles.ratingContent}>
            {renderStars(parseInt(currentHousing.rating))}
          </div>
        </div>
      </div>
      <CollapseDescri datas={[currentHousing]} />
    </section>
  );
}

export default Description;
