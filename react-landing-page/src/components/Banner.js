import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "React landing page",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eligendi maxime at veritatis, nostrum, nesciunt debitis illo vitae quis aspernatur assumenda laudantium ipsam sit minus magnam provident dolores illum rem."
}

function Banner() {
  return (
    <div className='banner-bg'>
        <div className='container'>
            <div className='banner-con'>
                <div className='banner-text'>
                    <h1>{bannerData.title}</h1>
                    <p>
                        {bannerData.desc}
                    </p>
                    <a href='#' className='banner-btn'>Learn Morn</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner