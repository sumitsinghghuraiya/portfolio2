import React from "react"
import "./header.css"
import CV from "../../assets/CV.pdf" 
const Header = () => {
    
    return(<>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Sumit singh Ghuraiya</h1>
                <h5 className="text-light" >Frontend Developer</h5>
                <a href={CV} download>Download CV</a>
                <a href="#contact">Let's Talk</a>
            </div> 
            </>
    )
}

export default Header