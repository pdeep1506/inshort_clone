import { useEffect, useState } from 'react';
import './App.css';
import NavBarInshort from './Component/NavBarInshort';
import axios from 'axios';
import NewsContent from './Component/NewsContent/NewsContent';
import apiKey from './Config/apiKey';
import Footer from './Footer/Footer';
function App() {
  const [category, setcategory] = useState('general')
  const [newsArray, setnewsArray] = useState([])
  const [newsResults, setnewsResults] = useState();
  // console.log(category)
  
  const newsApi = async()=>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`)
      // console.log(news.data)
     

      setnewsResults(news.data.totalResults)
      setnewsArray(news.data.articles)
    }
    catch(err){
      console.log(err)
    }
  }
    useEffect(()=>{
      newsApi()
    },[category,newsResults])
  return (
    <div className="App">
      <NavBarInshort setcategory={setcategory}></NavBarInshort>

      <NewsContent newsArray={newsArray} newsResults={newsResults}></NewsContent>

      <Footer></Footer>
    </div>
  );
}

export default App;
