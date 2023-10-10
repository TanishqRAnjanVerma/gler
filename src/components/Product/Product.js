import React, {useEffect}from 'react'
import '../Product/product.css'




import img9 from "../image/img9.png";
import img10 from "../image/img10.png";
import img11 from "../image/img11.png";
import img12 from "../image/img12.png";
import img13 from "../image/img13.png";
import img14 from "../image/img14.png";
import img15 from "../image/img15.jpg";
import img16 from "../image/img16.png";
import img17 from "../image/img17.png";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc: img9,
    destTitle: 'Tiziano Series',
    grade: 'Switches',
  },

  {
    id:2,
    imgSrc: img10,
    destTitle: 'Power Track',
    grade: 'Combined',
  },

  {
    id:3,
    imgSrc: img11,
    destTitle: 'Tiziano Series',
     grade: 'Switches',
  },

  {
    id:4,
    imgSrc: img12,
    destTitle: 'Tiziano Series',
    grade: 'Adapter',
  },
  
  {
    id:5,
    imgSrc: img13,
    destTitle: 'Tiziano Series',
    
    grade: 'Adapter',
  
  },

  {
    id:6,
    imgSrc: img14,
    destTitle: 'Tiziano Series',
  
    grade: 'Adapter',
   
  },

  {
    id:7,
    imgSrc: img15,
    destTitle: 'Power Track',
    grade: 'Combined',
    
  },

  {
    id:8,
    imgSrc: img16,
    destTitle: 'Power Track',
    grade: 'Combined',
   
  },

  {
    id:9,
    imgSrc: img17,
    destTitle: 'Power Track',
    grade: 'Combined',
    
  },


]

const Product = () => {
  // Creating a react hook to add a scroll animation....

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Top Products
        </h3>
      </div>
  
      <div className="secContent grid">
        
        {/*Here we are going to use high order array method(map).
        To do that we shall use a list of object in one array.
        We need to create an array named data from that we shall .map() array to fetch each destination at once.*/}
        {
          Data.map(({id, imgSrc, destTitle, grade, Price, description})=>
          {
            return(
              <div key={id} data-aos="flip-left" className="singleDestination">
                {/*Here it will return single id from the map array*/}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo"data-aos="flip-up">
                  <h4 className="destTitle">{destTitle}</h4>
                 
                  <div className="fees flex"data-aos="flip-up">
                    <div className="grade">
                      <span>{grade}<small>8+</small></span>
                    </div>
                  </div>
              
                </div>
              </div>
            )
          })
        }
     

      </div>
    </section>
  )
}

export default Product