import React ,{useState , useEffect} from 'react';
import Slider from './Slider';
import VerticalSlider from './VerticalSlider';
import CardCollection from './CardCollection';
import styles from './css/newsbox.module.css'
import axios from 'axios'


function NewsBox(props) {
    const [newsList,setNewsList] = useState([]);
    const searchURL = makeURL(props.searchWord,props.parameter)
    
    useEffect(async () => {
      try {
        
        //const response = await axios.get(searchURL);
        await axios.post("https://news-api-nikhil.herokuapp.com/searchAPI/", {
          data: {
            url: searchURL,
            parameter: props.parameter,
          },
        });

        const response = await axios.get(
          `https://news-api-nikhil.herokuapp.com/searchAPI/${props.parameter}`
        );
        

        let tempNewsList = response.data.data.newsList.map((article) => {
          let { title, description, url, urlToImage } = article;
          return { title, description, url, urlToImage };
        });

        setNewsList(tempNewsList);
        
      } catch (err) {
        console.log(err.message);
      }
    }, [props.searchWord]);

    let len = newsList.length
    return newsList.length === 0 ? (
      <h1>Waiting ..........</h1>
    ) : (
      <div className={styles.newsbox}>
        <div className={styles.firstRow}>
          <Slider images={newsList.slice(0, 3)} />
          <VerticalSlider
            images={newsList.slice(3, 10)}
            listLength={2}
          ></VerticalSlider>
        </div>
        <CardCollection images={newsList.slice(10, newsList.length)} />
      </div>
    );
}

export default NewsBox

/* *************************** HELPING FUNCTION ****************************** */
function makeURL(searchWord,parameter){
  
  if(parameter === 'other'){
    return `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=popularity&apiKey=1b0058864d7e4ff4960fa4e2d670ce11`
  }else{
    return `https://newsapi.org/v2/top-headlines?country=in&category=${searchWord}&apiKey=1b0058864d7e4ff4960fa4e2d670ce11`;
  }
}