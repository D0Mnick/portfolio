import "./FooterStyles.css"
import React from 'react'
import { FaHome,  FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Catarman Northern Samar</p>
                    </div>
                </div>
                <div className="phone">
                    <h4> <FaPhone  size={20} style={{color:"fff", marginRight:"2rem"}}/>09957657605</h4>
                </div>
                
                <div className="email">
                    <h4> <FaMailBulk size={20} style={{color:"fff", marginRight:"2rem"}}/>dominicksalazar788@yahoo.com</h4>
                </div>
            </div>

            <div className="right">
                {/* <h4>About the company</h4>
                <p>this is fahimul kabir. CEO & Founder of Tech2etc. I enjoy discussing
                    new project and design challenges
                </p> */}
                <div className="social">

            <Link to="https://www.facebook.com/dominic.salazar.71/">
                <FaFacebook size={30} style={{color:"fff", marginRight:"2rem"}}/>
            </Link> 

            
                <FaTwitter size={30} style={{color:"fff", marginRight:"2rem"}}/>
          
            <Link to="https://www.linkedin.com/in/dominick-salazar-76ba16259/">
                <FaLinkedin size={30} style={{color:"fff", marginRight:"2rem"}}/>
            </Link> 

            <Link to="https://github.com/D0Mnick">
                <FaGithub size={30} style={{color:"fff", marginRight:"2rem"}}/>
            </Link> 

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
