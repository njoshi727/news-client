
import React from 'react'
import nextId from "react-id-generator";
import styles  from './css/verticalslidernewslist.module.css'

const VerticalSliderNewsList = (props) => {
  return (
    <div className={styles.newsList}>
      {
        props.images.map(imageObj => {
          const [id] = nextId();
          return (
            <a key={id} href={imageObj.url} className={styles.news}>
              <div className={styles.title}>{imageObj.title}</div>
              <div className={styles.description}>{imageObj.description}</div>
            </a>
          );
        })
      }
    </div>
  );
}

export default VerticalSliderNewsList
