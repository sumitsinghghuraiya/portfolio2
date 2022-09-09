import React from "react"
import "./testimonial.css"
import Img1 from "../../assets/avatar1.jpg"
import Img2 from "../../assets/avatar2.jpg"
import Img3 from "../../assets/avatar3.jpg"
import Img4 from "../../assets/avatar4.jpg"
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
    avatar: Img1,
    name:"tina show",
review: " The Tina Turner Musical is a jukebox musical featuring the music of Tina Turner and depicting her life from her humble beginnings in Nutbush, Tennessee, to her transformation into a rock 'n roll star."

},
{
    avatar:Img2,
    name: "shatta wale",
    review: "Charles Nii Armah Mensah Jr., is a Ghanaian reggae-dancehall artist. He is known by his stage name Shatta Wale, formerly Bandana. His best-known singles are Dancehall King, My level and We taking over "
},
{
    avatar:Img3,
    name: "Kwame Despite",
    review: "Osei Kwame Despite is a Ghanaian entrepreneur and a philanthropist with a foundation in music creation and knowledge of the broadcasting sector. Osei-Kwame is the CEO of the Despite Firm Ltd, a trade company with subsidiaries in the media industry, including UTV, PEACE FM, OKAY FM, NEAT FM and HELLO FM in Kumasi."
},
{
    avatar:Img4,
    name: "karma sanu",
    review: "Kedarnath Bhattacharya, better known as Kumar Sanu, is an Indian playback singer. He is known as the King of Melody in Bollywood. His voice and singing style are heavily influenced by singer Kishore Kumar. He is famous for singing thousands of Bollywood Hindi songs"
},];



const  Testimonial = () => {
    return (
           
        <section className="container">
                <h5>Review from clients</h5>
                <h2>Testimonials</h2>
                <Swiper className="container testimonials_container"
		            modules={ [Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    
                       { data.map( ({avatar,name,review},index) => {
                            return (
                                        <SwiperSlide Key={index} className="testimonial">
                                            <div className="client_avatar">
                                                <img src={avatar} alt="avatar one" />
                                            </div>
                                            <h5 className="client_name">{name}</h5>
                                            <small className="client_review">{review}</small>
                                        </SwiperSlide> 
                                    ) 
                            }  )
                        }
        
                </Swiper>
                
        </section>
    )
}
export default Testimonial