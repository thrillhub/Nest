import React from 'react'
import './Footer.css'
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-4.svg';
import Icon5 from '../../assets/images/icon-5.svg';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import appstore from '../../assets/images/app-store.jpg';
import playstore from '../../assets/images/google-play.jpg';
import payment from '../../assets/images/payment-method.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';



function Footer() {
  return (
    <>
    <div className="footerWrapper">
        <div className="footerBoxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={Icon1} alt="" /></span>
                            <div className="info">
                                <h4>Best Prices & Offers</h4>
                                <p>Order $60 or more</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={Icon2} alt="" /></span>
                            <div className="info">
                                <h4>Free delivery</h4>
                                <p>24/7 amazing services</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={Icon3} alt="" /></span>
                            <div className="info">
                                <h4>Great daily deal</h4>
                                <p>When you sign up</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={Icon4} alt="" /></span>
                            <div className="info">
                                <h4>Wide assortment</h4>
                                <p>Mega Discounts</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={Icon5} alt="" /></span>
                            <div className="info">
                                <h4>Easy returns</h4>
                                <p>Within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className='footer'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 part1">
                        <Link><img src={Logo} alt="" /></Link>
                        <br /> <br />
                        <p>Awesome grocery store website template</p>
                       
                            <p><LocationOnOutlinedIcon/><strong>Address:</strong> 5171 W Campbell Ave undefined <br /> Kent, Utah 53127 United States</p>
                            <p><HeadsetMicOutlinedIcon/><strong>Call Us</strong>(+91) - 540-025-124553</p>
                            <p><SendOutlinedIcon/><strong>Email:</strong>sale@Nest.com</p>
                            <p><AccessTimeOutlinedIcon/><strong>Hours</strong>10:00 - 18:00, Mon - Sat</p>
                    </div>

                    <div className="col-lg-6 part2">
                        <div className="row">
                            <div className="col md-4">
                            <h3>Company</h3>
                            <ul className='list list-inline mb-md-0'>
                            <li><Link to='#'>About Us </Link></li>
                            <li><Link to='#'>Delivery Information </Link></li>
                            <li><Link to='#'>Privacy Policy </Link></li>
                            <li><Link to='#'>Terms & Conditions </Link></li>
                            <li><Link to='#'>Contact Us </Link></li>
                            <li><Link to='#'>Support Center </Link></li>
                            <li><Link to='#'>Careers </Link></li>
                        </ul>

                            </div>
                            <div className="col md-4">
                            <h3>Account</h3>
                            <ul className='list list-inline mb-md-0'>
                            <li><Link to='#'>About Us </Link></li>
                            <li><Link to='#'>Delivery Information </Link></li>
                            <li><Link to='#'>Privacy Policy </Link></li>
                            <li><Link to='#'>Terms & Conditions </Link></li>
                            <li><Link to='#'>Contact Us </Link></li>
                            <li><Link to='#'>Support Center </Link></li>
                            <li><Link to='#'>Careers </Link></li>
                        </ul>

                            </div>
                            <div className="col md-4">
                            <h3>Corporate</h3>
                            <ul className='list list-inline mb-md-0'>
                            <li><Link to='#'>About Us </Link></li>
                            <li><Link to='#'>Delivery Information </Link></li>
                            <li><Link to='#'>Privacy Policy </Link></li>
                            <li><Link to='#'>Terms & Conditions </Link></li>
                            <li><Link to='#'>Contact Us </Link></li>
                            <li><Link to='#'>Support Center </Link></li>
                            <li><Link to='#'>Careers </Link></li>
                        </ul>

                            </div>
                            <div className="col md-4">
                            <h3>Popular</h3>
                            <ul className='list list-inline mb-md-0'>
                            <li><Link to='#'>About Us </Link></li>
                            <li><Link to='#'>Delivery Information </Link></li>
                            <li><Link to='#'>Privacy Policy </Link></li>
                            <li><Link to='#'>Terms & Conditions </Link></li>
                            <li><Link to='#'>Contact Us </Link></li>
                            <li><Link to='#'>Support Center </Link></li>
                            <li><Link to='#'>Careers </Link></li>
                        </ul>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 part3">
                        <h3>Install App</h3>
                        <br />
                        <p>From App Store or Google Play</p>
                        <div className="d-flex">
                            <Link><img src={appstore} alt="" width={150} /></Link>
                            <Link><img className='mx-2' src={playstore} alt="" width={150} /></Link>
                        </div>

                        <br />
                        <p>Secured Payment Gateways</p>
                        <Link><img src={payment} alt="" /></Link>

                    </div>
                    

                </div>


                <hr />
                <div className="row footer2">
                    <div className="col-lg-3 lowerfooter1">
                        <p>© 2022, Nest - HTML Ecommerce Template
                        All rights reserved</p>
                    </div>

                    <div className="col-lg-5 d-flex ">
                    <div className='m-auto d-flex align-items-center'>
                    <div className="phNo d-flex align-items-center mx-5">
                        <span> <HeadsetMicOutlinedIcon /></span>
                        <div className="info ml-3">
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                            <p className='mb-0'>Working 8:00-22:00</p>
                        </div>  
                    </div>
                    <div className="phNo d-flex align-items-center mx-5">
                        <span> <HeadsetMicOutlinedIcon /></span>
                        <div className="info ml-3">
                            <h3 className='text-g mb-0'>18900 - 67800</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                        </div>  
                    </div>
                    </div>
                        
                    </div>

                    <div className="col-lg-4 footericon">
                        <div className="d-flex align-items-center">
                            <h5>Follow Us</h5>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'><Link to={'#'}><FacebookOutlinedIcon /> </Link></li>
                                <li className='list-inline-item'><Link to={'#'}><TwitterIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><InstagramIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><PinterestIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><YouTubeIcon /></Link></li>
                            </ul>
                        </div>
                        <p>Up to 15% discount on your first subscribe</p>
                    </div>     
                </div>
            </div>
        </section>
    </div>



      
    </>
  )
}

export default Footer;
