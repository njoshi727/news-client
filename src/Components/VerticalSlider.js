import React , {useState} from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import VerticalSliderNewsList from './VerticalSliderNewsList';
import styles from "./css/verticalslider.module.css";

const VerticalSlider = (props) => {
  const [currImage , setCurrImage] = useState(0);
  
  const handleUplick = ()=>{
    let newIdx = (currImage - 1 + props.images.length) % props.images.length;
    setCurrImage(newIdx);
  }

  const handleDownClick = () => {
    let newIdx = (currImage + 1) % props.images.length;
    setCurrImage(newIdx);
  };

  function createArray(currImage , len , totalLen){
      let arr = [];
      for(let i=currImage;i<currImage+len;i++){
        let idx = i%totalLen;
        arr.push(props.images[idx]);
      }
      console.log(arr);
      return arr;
  }

  return (
    <div className={styles.verticalSlider}>
      {props.images.length === 0 ? (
        <h1> Waiting .... </h1>
      ) : (
        <>
          <BsFillCaretUpFill
            className={styles.UpBtn}
            onClick={() => handleUplick()}
          />

          <VerticalSliderNewsList
            images={createArray(
              currImage,
              props.listLength,
              props.images.length
            )}
          />

          <BsFillCaretDownFill
            className={styles.DownBtn}
            onClick={() => handleDownClick()}
          />
        </>
      )}
    </div>
  );
}

export default VerticalSlider
