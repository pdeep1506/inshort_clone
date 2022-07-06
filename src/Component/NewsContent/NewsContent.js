import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'
const NewsContent = ({newsArray,newsResults}) => {
  // console.log(newsArray)
  
  return (
    <Container maxWidth='md'>
      <div className='content'>
        <div className='downloadMessage'>
        <span className='downloadText'>
        for the best experience use inshorts app
            </span>
            <img alt='app store' height='80%' src='https://assets.inshorts.com/website_assets/images/appstore.png'></img>
            

            <img alt='play store' height='80%' src='https://assets.inshorts.com/website_assets/images/playstore.png'></img>
            </div>

            {
              newsArray.map((newsItem)=>{
                // console.log(newsArray)
                return(
                  
                  <NewsCard newsItem={newsItem} key={newsItem.title}></NewsCard>
                  )
              })
            }

            </div>
    
    
    </Container>
  )
}

export default NewsContent