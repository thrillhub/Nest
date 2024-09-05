import React from 'react'
import Slider from "react-slick";
import './index.css';
import Slide1 from '../../../assets/images/slider-1.png';
import Slide2 from '../../../assets/images/slider-2.png';
import Button from "@mui/material/Button";
import Newsletter from '../../../Components/Newsletter';




function HomeSlider() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000
      };
  return (
    <>
    <section className='homeslider'>
        <div className="container-fluid position-relative ">
        <Slider {...settings} className='home_slider_Main'>
            <div className="item">
                <img src={Slide1} className =" w-100" alt="" />
                <div className="info">
                    <h2 className='mb-4'>Don't Miss amazing  <br />Grocery deals</h2>
                    <p>Sign up for the daily newsletter</p>
                </div>
            </div>
            <div className="item">
                <img src={Slide2} className ="w-100 " alt="" />
                <div className="info">
                    <h2 className='mb-3'>Fresh Vegetables  <br />Big discount</h2>
                    <p>Sign up to 50% off on your first order</p>
                </div>
            </div>
        </Slider>
        <Newsletter />
        </div>
    </section>
      
    </>
  )
}

export default HomeSlider;
