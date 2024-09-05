import React from 'react'
import './style.css';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function Product(props) {
  return (
    <>
    <div className="productThumb">
        {
            props.tag!==null && props.tag!==undefined &&
            <span className={`badge ${props.tag}`} >{props.tag}</span>
        }
        <Link>
        <div className="imgWrapper">
            <img className='w-100' src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg" alt="" />

            <div className="overlay transition">
                <ul className='list list-inline mb-0'>
                    <li className='list-inline-item'>
                        <a className='cursor ' tooltip="Add to wishlist!" href=""><FavoriteBorderOutlinedIcon /></a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'tooltip="Compare" href=""><SyncAltOutlinedIcon /></a>
                    </li>
                    <li className='list-inline-item'>
                        <a className='cursor'tooltip="Quick view" href=""><VisibilityOutlinedIcon /></a>
                    </li>
                </ul>
            </div>
        </div>
        </Link>

        <div className="info">
            <span className='d-block catName'>Snack</span>
            <h4 className='title'><Link>Seeds Of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
            <span className='brand d-block'>By <Link className='text-g' href=""> NestFood</Link></span>

            <div className="d-flex align-items-center mt-3 justify-content-between">
                <div className="d-flex align-items-center">
                    <span className='price text-g font-weight-bold'>$22.8</span>
                    <span className='oldPrice'>$32.8</span>
                </div>
                <Button className='ml-auto transition'><ShoppingCartOutlinedIcon />Add</Button>

            </div>
        </div>

    </div>
      
    </>
  )
}

export default Product;
