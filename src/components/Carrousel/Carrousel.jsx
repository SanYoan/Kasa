import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carrousel.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carrousel({ pictures, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevImage = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const nextImage = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <img className={styles.image} src={pictures[currentSlide]} alt={title} />
      <button className={styles.prevButton} onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={styles.nextButton} onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <p className={styles.indexPictures}>
        {currentSlide + 1} / {pictures.length}
      </p>
    </div>
  );
}

export default Carrousel;
