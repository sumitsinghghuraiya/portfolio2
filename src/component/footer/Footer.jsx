import React from "react"
import "./footer.css"
import {IoLogoLinkedin} from "react-icons/io"
import {BsDiscord} from "react-icons/bs"
import {SiWhatsapp} from "react-icons/si"
const Footer = () => {
    return(
        <footer>
            <a href="#" className="footer_logo">Sumit</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://discordapp.com/users/sg#1048"><IoLogoLinkedin/></a>
                <a href="https://www.linkedin.com/in/sumit-singh-ghuraiya-507292203/"><BsDiscord/></a>
                <a href="https://wa.me/+917693985475"><SiWhatsapp/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy;Sumit Singh.All rights reserved.</small>
            </div>
        </footer>
    )
}
export default Footer