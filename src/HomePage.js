import React from 'react'
import './index.css';
import Header from './Header';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const HomePage = () => {
  return (
    
    <div className="home-page" id='1'>
        
        <Header/>
       
        <div className='myname'>
            <h1>Hi There, <br />I'm Salma Jiffry</h1>
            
            <h3>I'm a Full Stack Software Developer</h3>

        <div className='me-button'>
        <button className='me'>
        <a href="#2">About me</a>
                
            </button>
        </div>
            

            <div className='socialmedia'>
            <ul className="media-list">
            <li className="item"><a href="https://www.linkedin.com/in/salma-jiffry"><FaLinkedin/></a></li>
            <li className="item"><a href="https://www.instagram.com/salmaaa.jif_?igsh=MXJ1dXRhbDdxaG56"><FaInstagram/></a></li>
            <li className="item"><a href="https://github.com/Salma-Jiffry"><FaGithub/></a></li>
            <li className="item"><a href="https://wa.me/94778212243"><FaWhatsapp/></a></li>
        </ul>
            </div>

            
        </div>
    </div>
  )
}

export default HomePage