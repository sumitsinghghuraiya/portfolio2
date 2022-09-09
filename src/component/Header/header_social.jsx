import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
const Header_social = () => {
    return(
         <div className="header_social">
            <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="http://github.com" target="_blank"><BsGithub/></a>
            <a href="http://youtube.com" target="_blank"><BsYoutube/></a>
            <a href="http://instagram.com" target="_blank"><BsInstagram/></a>
         </div>
    )
}
export default Header_social