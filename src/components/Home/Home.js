import React, { useEffect } from 'react'
import img1 from "../images/img1.PNG";
import img2 from "../images/img2.png";
import img3 from "../images/img3.PNG";
import img4 from "../images/img4.PNG";
import img5 from "../images/img5.PNG";
import img6 from "../images/img6.PNG";
import video1 from "../Videos/video1.mp4"
import video2 from "../Videos/video2.mp4"

import "../Home/home.css"



import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../Footer/Footer';


const Home = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div >
      <div className="vedo">
       <video  controlsList='none' loop autoPlay src={video1} type="video/mp4" data-aos="fade-right"></video>
      </div> 

     
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="fade-up">
          <div className="carousel-inner"data-aos="fade-up" >
           <h1 data-aos="fade-right" className='mainheading'>WELCOME TO GLER</h1>
          <p data-aos="fade-right" className='extratxt'>Presenting the Brand New Series of Adapter</p> 
            <div className="carousel-item active" data-aos="fade-up" >
              <img src={img1} className="d-block w-100"  alt="image" />
            </div>
            <div className="carousel-item active">
              <img src={img2} className="d-block w-100" alt="image" />
            </div>
            <div className="carousel-item active">
              <img src={img3} className="d-block w-100" alt="image" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
     



      
        <div className='card1 'data-aos="fade-up" >
          <div className="row"data-aos="fade-up">
            <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4">
              <div className="card h-100" data-aos="fade-up" >
                <img src={img4} className="card-img-top" alt="image" />
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title" data-aos="fade-up">RAFFAELLO SERIES</h5>
                  <p className="card-text" data-aos="fade-up">The Unique temperament of the Raphael series is serene, harmonious, symmetrical, perfect and tranquil, like the works of Raphael Sanzio.Raphael series is made of zirconium sand oxidation technology, providing a skin like touch.</p>

                </div>
              </div>
            </div>

            <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4" data-aos="fade-up">
              <div className="card h-100 " data-aos="fade-up">
                <img src={img5} className="card-img-top" alt="image" />
                <div className="card-body" data-aos="fade-up">
                  <h5 className="card-title" data-aos="fade-up">VARIANTS AVAILABLE</h5>
                  <p className="card-text"data-aos="fade-up" >There are different variants available, providing the most stunning designs.</p>
                </div>
              </div>
            </div>

            <div className=" col-md-4 col-sm-12 col-xl-4 col-xxl-4" data-aos="fade-up">
              <div className="card h-100"  data-aos="fade-up">
                <img src={img6} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h5 className="card-title" data-aos="fade-up">TIZIANO SERIES</h5>
                  <p className="card-text" data-aos="fade-up">The unique temperament of the Titan series is graceful and soft like the work of painter, Tiziano Vecell. </p>

                </div>
              </div>
            </div>
          </div>
        </div>
     


      <div className="french" data-aos="fade-right" >
         {/* <h1 data-aos="fade-up">
         CATALOUGE
        </h1>  */}
        <video controlsList='none' loop autoPlay src={video2} type="video/mp4"></video>
      </div>

      <Footer />
    </div>
  )
}

export default Home
