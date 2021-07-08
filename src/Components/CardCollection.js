import React from 'react'
import styles from "./css/cardCollection.module.css";
import Card from './Card';

const CardCollection = (props) => {
  return (
    <>
      <h1 className={styles.heading}>HEADLINE ON THE GO !</h1>
      <div className={styles.collection}>
        {
          props.images.map(image=>{
            return <Card image={image}/>
          })
        }

      </div>
    </>
  );
}

export default CardCollection
