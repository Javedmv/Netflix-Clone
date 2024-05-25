import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>title</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>After running these commands, you should see the following
             output indicating that the React app has been created and dependencies have been installed:</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
