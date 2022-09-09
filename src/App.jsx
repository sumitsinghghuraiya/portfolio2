import React from "react"
import "./index.css"
import Header from "./component/Header/Header"
import Nav from "./component/nav/Nav" 
import About from "./component/about/About"  
import Contact from "./component/contact/Contact"
import Experience from "./component/experience/Experience"
import Testimonial from "./component/testimonial/Testimonial"
import Footer from "./component/footer/Footer"
import Services from "./component/services/Services"
import Portfolio from "./component/portfolio/Portfolio"
const App = () => {
    return (
    <>
             <Header />
             <Nav />
             <About />           
             <Experience /> 
             <Services /> 
             <Portfolio/>
             <Testimonial /> 
             <Contact /> 
             <Footer />
    </>
    )
}
export default App;