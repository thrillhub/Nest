import React from 'react'
import "./style.css"
import img1 from '../../../assets/images/pic1.jpg';
import img2 from '../../../assets/images/pic2.jpg';
import img3 from '../../../assets/images/pic3.jpg';
import img4 from '../../../assets/images/pic4.jpg';
import img5 from '../../../assets/images/pic5.jpg';
import img6 from '../../../assets/images/pic6.jpg';
import img7 from '../../../assets/images/pic7.jpg';
import img8 from '../../../assets/images/pic8.jpg';
import img9 from '../../../assets/images/pic9.jpg';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';






function TopProducts(props) {
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>


        <div className="items d-flex align-items-center">
          <div className="img">
          <Link to="">
            <img className='w-100' src={img1} alt="" />
          </Link>

          </div>
          <div className="info px-3">
            <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
                    <span className='price text-g font-weight-bold'>$22.8</span>
                    <span className='oldPrice'>$32.8</span>
                </div>
          
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
          <Link to="">
            <img className='w-100' src={img2} alt="" />
          </Link>

          </div>
          <div className="info px-3">
            <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
                    <span className='price text-g font-weight-bold'>$22.8</span>
                    <span className='oldPrice'>$32.8</span>
                </div>
          
          </div>
        </div>

         <div className="items d-flex align-items-center">
          <div className="img">
          <Link to="">
            <img className='w-100' src={img3} alt="" />
          </Link>

          </div>
          <div className="info px-3">
            <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
                    <span className='price text-g font-weight-bold'>$22.8</span>
                    <span className='oldPrice'>$32.8</span>
                </div>
          
          </div>
        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
          <Link to="">
            <img className='w-100' src={img4} alt="" />
          </Link>

          </div>
          <div className="info px-3">
            <Link to=""><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
                    <span className='price text-g font-weight-bold'>$22.8</span>
                    <span className='oldPrice'>$32.8</span>
                </div>
          
          </div>
        </div>



      </div>
    </>
  )
}

export default TopProducts;
