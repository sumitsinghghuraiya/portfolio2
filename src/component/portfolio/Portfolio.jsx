import React from "react"
import "./portfolio.css"
import Img1 from "../../assets/clock.png"
import Img2 from "../../assets/calculator.png"
import Img3 from "../../assets/galaxy.png"
import Img4 from "../../assets/practicecsss.png"
import Img5 from "../../university .png"
const  Portfolio = () => {
    return ( 
        <>
             <section id="portfolio">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>

                <div className="container portfolio_container">
                    <article className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={Img1} alt="img" />
                        </div>
                            <h3>CLOCK Using Javascript</h3>
                            <div className="portfolio_btn">
                            <a href="https://github.com/sumitsinghghuraiya/clock.git" className="btn">Github</a>
                            <a href="https://sumitsinghghuraiya.github.io/clock/" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image"><img src={Img2} alt="img" />
                        </div>
                            <h3>CALCULATOR Using Javascript</h3>
                            <div className="portfolio_btn">
                            <a href="https://github.com/sumitsinghghuraiya/calculator.git" className="btn">Github</a>
                            <a href="https://sumitsinghghuraiya.github.io/calculator/" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>                       
                    </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image"><img src={Img3} alt="img" />
                        </div>
                            <h3>GALAXY Website Using Html and CSS</h3>
                            <div className="portfolio_btn">
                            <a href="https://github.com/sumitsinghghuraiya/NoobccProjects.git" className="btn">Github</a>
                            <a href="https://sumitsinghghuraiya.github.io/NoobccProjects/" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                    </article>
                     <article className="portfolio_item">
                        <div className="portfolio_item-image"><img src={Img4} alt="img" />
                        </div>
                            <h3>QR-Scan Using Css3</h3>
                            <div className="portfolio_btn">
                            <a href="https://github.com/sumitsinghghuraiya/QR-scan-.git" className="btn">Github</a>
                            <a href="https://sumitsinghghuraiya.github.io/QR-scan-/" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                     </article>
                    <article className="portfolio_item">
                        <div className="portfolio_item-image"><img src={Img5} alt="img" />
                        </div>
                            <h3>University Website Using Bootstrap5</h3>
                            <div className="portfolio_btn">
                            <a href="https://github.com/sumitsinghghuraiya/university.git" className="btn">Github</a>
                            <a href="https://sumitsinghghuraiya.github.io/university/" className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>   
                    </article>
                </div>
             </section>
        </>
    );
}
export default Portfolio