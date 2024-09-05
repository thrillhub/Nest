import React from "react";
import SliderBanner from "./slider/index";
import CatSlider from "../../Components/catSlider";
import Banners from "../../Components/banners";
import "./style.css";
import Product from "../../Components/Product";
import Banner4 from '../../assets/images/banner4.png';
import Slider from "react-slick";
import TopProducts from "./TopProducts";
import Banner12 from '../../assets/images/banner12.png';
import Newsletter from "../../Components/Newsletter";



function Home() {



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows:true,
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
          }
      },
     
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
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
      <SliderBanner />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-4">
        <h2 className="hd mb-0 mt-0">Popular Products</h2>
      </div>
      <div className="col-lg-8">
        <ul className="list list-inline d-flex align-items-center justify-content-end ml-auto filterTab mb-0">
          <li className="list-inline-item">
            <a className="cursor">All</a>
          </li>
          <li className="list-inline-item">
            <a className="cursor">Milks & Dairies</a>
          </li>
          <li className="list-inline-item">
            <a className="cursor">Coffes & Teas</a>
          </li>
          <li className="list-inline-item smallscreen">
            <a className="cursor">Pet Foods</a>
          </li>
          <li className="list-inline-item smallscreen">
            <a className="cursor">Meats</a>
          </li>
          <li className="list-inline-item smallscreen">
            <a className="cursor">Vegetables</a>
          </li>
          <li className="list-inline-item smallscreen">
            <a className="cursor">Fruits</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="row productRow">
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="sale" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="hot" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="new" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="best" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="sale" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="new" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="best" />
      </div>
      <div className="col-6 col-md-4 col-lg-3 mb-4">
        <Product tag="hot" />
      </div>
      
    </div>
  </div>
</section>




      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto filterTab mb-0 ">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New added</a>
              </li>
              
            </ul>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col-lg-3 pr-5">
              <img className="w-100" src={Banner4} alt="" />
            </div>

            <div className="col-lg-9">
            <Slider {...settings} className='prodSlider'>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
           
        </Slider>
            </div>
          </div>

        

        </div>
      </section>



      <section className="topProductSection">
        <div className="container-fluid">
          <div className="row Topsell">
            <div className="col">
              <TopProducts title="Top Sellings"/>
              
            </div>

            <div className="col">
            <TopProducts title="Trending Products"/>
              
            </div>

            <div className="col">
            <TopProducts title="Recently added"/>
              
            </div>

            <div className="col">
            <TopProducts title="Top Rated"/>
            </div>
          

          </div>
        </div>

      </section>


      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily <br />
              needs from our shop</h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br /> <br />
              <Newsletter />

            </div>
            <div className="img">
              <img className="w-100" src={Banner12} alt="" />
            </div>
          </div>

        </div>

      </section>
    

    </>
  );
}

export default Home;
