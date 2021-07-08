import React , {useState} from 'react'
import styles from './css/navbar.module.css'

function Navbar(props) {
  
  const [currSearchWord , setCurrSearchWord]  = useState("");

  function handleChange(e){
    let word = e.target.value;
    setCurrSearchWord(word);
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navtitle}>
        <img
          className={styles.navtitlelogo}
          src={process.env.PUBLIC_URL + "/img/title.png"}
          alt=""
        />
        <div className="nav=title-name">News Project</div>
      </div>
      <div className={styles.linksbox}>
        <div className={styles.link} onClick={()=>{props.handleSearchWordAndParameter("headlines","headlines");setCurrSearchWord("")}}> Home </div>
        <div className={styles.link} onClick={()=>{props.handleSearchWordAndParameter("politics", "politics");setCurrSearchWord("")}}> Politics </div>
        <div className={styles.link} onClick={()=>{props.handleSearchWordAndParameter("sports", "sports");setCurrSearchWord("")}}> Sports </div>
        <div className={styles.link} onClick={()=>{props.handleSearchWordAndParameter("entertainment", "entertainment");setCurrSearchWord("")}}> Entertainment </div>
      </div>
      <div className={styles.searchBoxDiv}>
        <input className={styles.searchBox} type="text" value={currSearchWord} onChange={(e)=> handleChange(e)}/>
        <button className={styles.searchButton} onClick={()=>{props.handleSearchWordAndParameter(currSearchWord, "other"); setCurrSearchWord("")}} > Search</button>
      </div>
    </div>
  );
}

export default Navbar
