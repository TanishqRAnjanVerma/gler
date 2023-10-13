import React from 'react'
import imgpost from '../images/imgpost.jpg'
import imgpost2 from '../images/imgpost2.jpg'
import ceopic from '../images/ceopic.png'
import "../About/about.css"

function About() {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div className="post1">
        <img src={imgpost} class="img-fluid" alt="..." ></img>
      </div>

    <div className="txt">
        <p className="text-end" >Our Vision at GLER</p>
      </div>


      <div className="cardq" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">GLER is determined to rise as the unparalleled pioneer
            of precision and innovation, wielding a transformative force that sparks progress and unveils uncharted horizons.
            Our unwavering dedication propels us toward a radiant era, where we redefine the energy industry with sophisticated and ground-breaking solutions. We are commited to create safe, secure environments,
            spreading energy and possibilities everywhere, where limitations no longer hold us back, and life feels like a treasure chest of opportunities. </p>

        </div>
      </div>


   {/*
      <div className="txt1">
        <p className="text-end" >Our mission at GLER</p>
      </div>

      <div className="cardu" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">At GLER, our mission is crystal clear to deliver the world's most dependable and secure
            power track systems. Our unwavering commitment drives us to engineer solutions that establish a global benchmark
            for reliability and safety. We ensure that businesses abd communities  can rely on our technology for smooth, protected,
            and uninterrupted power distribution. </p>
        </div>
      </div>


      <div className="txt2">
        <p className="text-end" >Security Certification</p>
      </div>

      <div className="cardv" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">All products comply with the International Electrotechnical Commission &#40;ICE&#41; safety standards.
            Holding 58 patents, certified by the Conformite Europeenne &#40;CE&#41; and the Federal Communications Commission &#40;FCC&#41;. </p>

        </div>
      </div>


      <div className="txt3">
        <p className="text-end" >Environmental Certification</p>
      </div>

      <div className="cardx" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">Protecting the environment and caring for health  are our corporate values. Our products are certified
            by RoHS compliance, and our materials are recyclable and environmentally friendly. </p>

        </div>
      </div>



      <div className="txt4">
        <p className="text-end" >It's not the <br /> things we <br /> make, but the <br /> lives we touch.</p>
      </div>
      <div className="post2">
        <img src={imgpost2} class="img-fluid" alt="..." ></img>
      </div>


      <div className="ceo">
        <img src={ceopic} class="img-thumbnail" alt="ceo-image" />
      </div>

      <div className="txt5">
        <p className="text-end" >Saurabh Saggar <br /> CEO of GLER S.R.L</p>
      </div>

      <div className="cardy" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">Saurabh Saggar is a distinguished business leader with over 15 years of invaluable experience in the power track industry.
            His remarkable journey has been characterized by visionary leadership, paralleled management skilss, and a commitment  to driving innovation in the business world. </p>
           <p className="card-text"> As the CEO of Gler S.R.L, Mr. Saggar has demonstrated an exceptional ability to turn innovative ideas into thriving businesses, having completed his studies at prestigious institutions such as the University of Cambridge, Singapore and Deakin University, Australia. These educational experiences have enriched his knowledge and deepened his understanding of global business dynamics.  <br />
            Based in Turin, Italy, the industrial hub of country, Mr. Saggar founded Gler S.R.L, a testament to his vison and dedication to making a lasting impact. Under his leadership, Gler has thrived, setting new standards of innovation and success in the industry. Saurabh Saggar's legacy is one of transformation and progress. His exceptional leadership and unwavering commitment to turning visionary ideas into reality continue to shape the future of Gler and inspire those around him.</p>
        
        </div>
      </div>
 */}

    </div>
  )
}

export default About
