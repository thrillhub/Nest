import React from 'react';
import '../banners/style.css';
import Banner1 from '../../assets/images/banner-1.png';
import Banner2 from '../../assets/images/banner-2.png';
import Banner3 from '../../assets/images/banner-3.png';

function Banners() {
  return (
    <>
      <div className="bannerSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 text-center ">
              <div className="box">
                <img className="w-100 transition" src={Banner1} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="box">
                <img className="w-100 transition" src={Banner2} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="box">
                <img className="w-100 transition" src={Banner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banners;
