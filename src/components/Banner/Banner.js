import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../axios'
import {API_KEY_HERE, imageUrl} from '../../Constants'

function randomTwenty(){
  return Math.floor(Math.random() * 20) ;
}

function Banner() {
  const [movie,setMovie] = useState();
  useEffect(()=>{
    const random = randomTwenty()
    axios.get(`trending/all/week?api_key=${API_KEY_HERE}&language=en-US`).then((res) => 
      setMovie(res.data.results[random]));
  },[]);

  return (
    <div style={{backgroundImage:`url(${imageUrl+movie?.backdrop_path || ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title || ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?.overview || ''}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
