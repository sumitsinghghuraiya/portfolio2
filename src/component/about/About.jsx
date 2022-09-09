import React from "react"
import "./about.css"
import ME from "../../assets/sumit2.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUser} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="about-me" id="ip"/>
                    </div>
                </div>
            
              <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>Student</small>
                    </article>
                    <article className="about_card">
                        <FiUser className="about_icon"/>
                        <h5>College</h5>
                        <small>IT-(AIR) 3rd Year MITS,Gwalior</small>
                    </article>
                    <article className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projects</h5>
                        <small>5+ Completed</small>
                    </article>
                </div>
                <p>
                    Hi, I am Sumit singh Ghuraiya a Btech student of IT-(AIR).I am currently in 3rd Year.I play football as outdoor game and COD as indoor game.
                    I have 3-star in codechef and solved 50+ problems on Leetcode.I do frontend development in react.   
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </div>
            </div>
        </section>
    );
}
export default About