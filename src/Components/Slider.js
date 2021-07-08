import React, {useState} from 'react'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import styles from './css/slider.module.css'

const Slider = (props) => {
  const [currImageIdx , setCurrImageIdx] = useState(0);
  
const handleLeftClick = (e)=>{
  let newIdx = (currImageIdx - 1 + props.images.length) % props.images.length;
  setCurrImageIdx(newIdx);
}

const handleRightClick = (e) => {
  let newIdx = (currImageIdx + 1) % props.images.length;
  setCurrImageIdx(newIdx);
};

  
  return (
    <div className={styles.slider}>
      {props.images.length === 0 ? (
        <h1> Waiting .... </h1>
      ) : (
        <>
          <BsFillCaretLeftFill
            className={styles.leftBtn}
            onClick={() => handleLeftClick()}
          />
          <BsFillCaretRightFill
            className={styles.rightBtn}
            onClick={() => handleRightClick()}
          />
          <a href={props.images[currImageIdx].url} className={styles.imageBox}>
            <img
              src={props.images[currImageIdx].urlToImage}
              alt={props.images[currImageIdx].title}
              className={styles.image}
            />
            <div className={styles.titleBox}> {props.images[currImageIdx].title} </div>
          </a>
        </>
      )}
    </div>
  );
}

export default Slider

/* 

*/