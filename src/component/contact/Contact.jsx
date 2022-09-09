import React, {useRef} from "react"
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiLinkedinBoxLine} from "react-icons/ri"
import {ImWhatsapp} from "react-icons/im"
import emailjs from "emailjs-com"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('SUMIT612', 'template_42fotb7', form.current, 'nHewvTQlOvvZScJfV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>sumitghuraiya@gmail.com</h5>
                        <a href="https://sumitghuraiya@gmail.com" className="">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <RiLinkedinBoxLine className="contact_option-icon"/>
                        <h4>Linkedin</h4>
                        <h5>sumit singh ghuraiya</h5>
                        <a href="https://www.linkedin.com/in/sumit-singh-ghuraiya-507292203/" >Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <ImWhatsapp className="contact_option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+917693985475</h5>
                        <a href="https://wa.me/+917693985475" >Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="your full name" required />
                    <input type="email" name="email" placeholder="your email" required />
                    <textarea name="message" rows="7" placeholder="your message"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact