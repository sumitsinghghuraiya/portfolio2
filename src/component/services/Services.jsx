import React from "react";
import "./services.css";
import {BiCheck} from "react-icons/bi"
const Services= ()=> {
    return(
       <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
            <article className="service">
                <div className="service_head">
                    <h3>UI/UX dESIGN</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Design Website</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Analyze and offer insights for the usability of the features and overall project</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Help visualize the interaction patterns and interface behaviors</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Using Figma for generate responsive , keen attractive, and delightfull interface</p>
                    </li>
                </ul>
            </article>
            <article className="service">
                <div className="service_head">
                    <h3>WEB DEVELOPMENT</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Build the Website using HTML5,CSS And Javascript Only</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Build website using React.js</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon" />
                        <p>Backend In Node.js</p>
                    </li>
                    
                    <li>
                    <BiCheck className="service_list-icon" />
                        <p>Build The Resposive website Along with Using Bootstrap5</p>
                    </li>
                </ul>
            </article>
            
        </div>
       </section>
    );
}
export default Services;