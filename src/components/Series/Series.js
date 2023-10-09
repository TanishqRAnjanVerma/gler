


import React, { useEffect } from 'react'


import imgbanner from "../images/imgbanner.jpg";
import img7 from "../images/img7.PNG";
import img8 from "../images/img8.jpg";
import "../Series/series.css"
import video3 from "../Videos/video3.mp4"
import video4 from "../Videos/video4.mp4"
import video5 from "../Videos/video5.mp4"



import Aos from 'aos'
import 'aos/dist/aos.css'
import Product from '../Product/Product';
import Slider from '../Slider/Slider';




const Series = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (

    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" data-bs-ride="carousel" data-aos="fade-right">
          <div className="carousel-item active" data-aos="fade-right">
             <h1 className='best' data-aos="fade-up">
              BEST SELLING &nbsp; PRODUCTS
            </h1> 
            <img src={imgbanner} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100" alt="image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

    </div>
        
      
      <div className='slidr' data-aos="fade-up">  <Slider/></div>

       <div className='product' data-aos="fade-up"> <Product /> </div>

        <div className="cover2" data-aos="fade-up" >
          <video  controlsList='none' loop autoPlay src={video3} type="video/mp4" ></video>
        </div>

        <div className="cover3" data-aos="fade-up">
          <video controlsList='none' loop autoPlay src={video4} type="video/mp4" ></video>
        </div>
        <div className="cover4" data-aos="fade-up" >
          <video controlsList='none' loop autoPlay src={video5} type="video/mp4" ></video>
        </div>

      </div>


  )
}

export default Series
