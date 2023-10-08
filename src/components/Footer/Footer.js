import React from 'react'
import "../Footer/footer.css"

function Footer() {
    return (
        <div>
            <footer className="site-footer" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">GLER aims to be the foremost leader in precision and innovation, empowering progress and illuminating new possibilities. We are dedicated to ushering in a glorious era of limitless capabilities, revolutionizing the power industry with elegant and revolutionary solutions. Our commitment extends to creating a secure environment and linking new life to every corner of the world, forging a future where progress knows no bounds, and life is filled with endless opportunities.
</p>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links ">
                                <li><a href="#">Power Tracks</a></li>
                                <li><a href="#">Raffaello Series</a></li>
                                <li><a href="#">Tiziano Series </a></li>
                                <li><a href="#">Combined </a></li>
                                <li><a href="#">Variants</a></li>
                                
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="small" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-12">
                            <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/gler-italy-89a49628a?trk=contact-info"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
