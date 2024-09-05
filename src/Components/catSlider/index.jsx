import React from 'react';
import '../catSlider/style.css';
import Slider from "react-slick";
function CatSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay:2000,
        centerMode: true,
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
            <div className="catSliderSection">
                <div className="container-fluid">
                    <h2 className='hd'>Featured Categories</h2>
                    <div className="col-lg-12">
                    <Slider {...settings} className='cat_slider_Main' id='cat_slider_Main'>
                        <div className="item">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                        <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>

            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>

            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                    <h5>Cake & Milk</h5>
                    <p>26 items</p>
                </div>
            </div>
                    </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatSlider;
