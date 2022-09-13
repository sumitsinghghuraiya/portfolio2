import React from "react"
import "./header.css"
import CV from "../../assets/CV.pdf" 
import ME from "../../assets/sumitsingh1.png"
import Header_social from "./header_social"
const Header = () => {
    
    return(<>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Sumit singh Ghuraiya</h1>
                <h5 className="text-light" >Frontend Developer</h5>
                <div className="cta">
                 <a href={CV} download className="btn">Download CV</a>
                 <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                <Header_social />
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                
                <a href="#contact" className="scroll_down">ScrollDown</a>
            </div> 
            </>
        )
}

export default Header