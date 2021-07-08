import React from 'react'
import styles from "./css/card.module.css";

const Card = (props) => {
  return (
    <a className={styles.card} href={props.image.url}>
      <div>
        <img
          src={props.image.urlToImage}
          alt="Image Not available"
          className={styles.image}
        />
      </div>
      <div className={styles.title}>{props.image.title}</div>
    </a>
  );
}

export default Card
