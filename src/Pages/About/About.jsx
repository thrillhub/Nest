import React from 'react'
import './style.css';
import about1 from '../../assets/images/about-1.png';
import Slider from 'react-slick';
import about2 from '../../assets/images/about-2.png';
import about3 from '../../assets/images/about-3.png';
import about4 from '../../assets/images/about-4.png';


function About() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    autoplay:2000,
    centerMode: true,
    responsive: [
       
       
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};
  return (
    <>
    <section className='about_us'> 
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="info">
              <img className='w-100' src={about1} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <h2 className='mb-4 text-center'>Welcome To Nest</h2>
              <p className='mb-2 opacity-50 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
              <p className='opacity-50'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
            </div>
            <div className='about_slider'>
            <Slider {...settings} className='cat_slider_Main' id='cat_slider_Main'>
                        <div className="img_item">
                            <div className="img_info">
                                <img className='w-100' src={about2} alt="" />
                            </div>
                        </div>
                        <div className="item">
                <div className="info">
                    <img className='w-100' src={about3} alt="" />
                </div>
            </div>

            <div className="item">
                <div className="info">
                    <img className='w-100' src={about4} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img className='w-100' src={about2} alt="" />
                </div>
            </div>
            </Slider>

            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default About
