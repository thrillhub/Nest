import React, { useState } from 'react'
import './Navigation.css'
import Button from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link } from 'react-router-dom';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import Logo from '../../../assets/images/logo.svg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



function Navigation() {


    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    <div className="nav d-flex align-items-center position-relative">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between position-relative">
                    <div className="col-lg-12 d-lg-none position-absolute menuicon">
                        <span className="catTab" onClick={toggleSidebar}>
                            <MenuOutlinedIcon /></span>
                    </div>

                    
                    <div className="col-lg-2 part1 d-none d-lg-flex align-items-center">
                        <Button className='bg-g text-white catTab'>
                            <GridViewOutlinedIcon /> Browse All Categories <KeyboardArrowDownOutlinedIcon />
                        </Button>
                    </div>
                    <div className="col-lg-7 part2 position-static d-none d-lg-block">
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'><Button><Link to='/'>Home</Link></Button></li>
                                <li className='list-inline-item'><Button><Link to='/about'>About</Link></Button></li>
                                <li className='list-inline-item'><Button><Link to='/'>Shop</Link></Button></li>
                                <li className='list-inline-item'>
                                    <Button><Link to='/'>Vendors</Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                                            <li><Button><Link to="/my-account">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="/forgot-password">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="/reset-password">Reset Password</Link></Button></li>
                                            <li><Button><Link to="/purchase-guide">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/privacy-policy">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/terms-service">Terms of Service</Link></Button></li>
                                            <li><Button><Link to="/404-page">404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button><Link to='/'>Mega menu<KeyboardArrowDownOutlinedIcon /></Link></Button>
                                    <div className='dropdown_menu megaMenu w-100 '>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className='fw-semibold text-g'>Fruits & Vegetables</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Sprouts</Link></li>
                                                    <li><Link to="">Exotic Fruits & veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className='fw-semibold text-g'>Breakfast & Dairy</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Sprouts</Link></li>
                                                    <li><Link to="">Exotic Fruits & veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className='fw-semibold text-g'>Meat & Seafood</h4>
                                                <ul className='mt-4 mb-0'>
                                                    <li><Link to="">Meat & Poultry</Link></li>
                                                    <li><Link to="">Fresh vegetables</Link></li>
                                                    <li><Link to="">Herbs & Seasonings</Link></li>
                                                    <li><Link to="">Cuts & Sprouts</Link></li>
                                                    <li><Link to="">Exotic Fruits & veggies</Link></li>
                                                    <li><Link to="">Packaged Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100' alt="Banner" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Button><Link to='/'>Blog</Link></Button></li>
                                <li className='list-inline-item'><Button><Link to='/'>Pages<KeyboardArrowDownOutlinedIcon /></Link></Button>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Button><Link to="/about">About Us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                                            <li><Button><Link to="/my-account">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="/forgot-password">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="/reset-password">Reset Password</Link></Button></li>
                                            <li><Button><Link to="/purchase-guide">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="/privacy-policy">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="/terms-service">Terms of Service</Link></Button></li>
                                            <li><Button><Link to="/404-page">404 Page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Button><Link to='/contact'>Contact</Link></Button></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-lg-2 part3 d-none d-lg-flex align-items-center">
                        <div className="phNo d-flex align-items-center ml-auto">
                            <span> <HeadsetOutlinedIcon /></span>
                            <div className="info ml-3">
                                <h3 className='text-g mb-0'>1900 - 888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Component */}
            {isSidebarOpen && (
                <div className="sidebar">
                    <div className="sidebar-header">
                    <img src={Logo} alt="Logo" className="logo" />
                        <Button className="close-btn" onClick={toggleSidebar}>X</Button>
                       
                    </div>
                    <input type="text" className="form-control mb-3" placeholder="Search for items..." />
                    <ul className="list-unstyled mb-0 ">
                        <li><Button><Link to='/'>Home</Link></Button></li>
                        <li><Button><Link to='/shop'>Shop</Link></Button></li>
                        <li><Button><Link to='/vendors'>Vendors</Link></Button></li>
                        <li><Button><Link to='/mega-menu'>Mega Menu</Link></Button></li>
                        <li><Button><Link to='/blog'>Blog</Link></Button></li>
                        <li><Button><Link to='/pages'>Pages</Link></Button></li>
                        <li><Button><Link to='/language'>Language</Link></Button></li>
                        <li><Button><Link to='/contact'>Contact</Link></Button></li>
                        <li><Button><Link to='/my-account'>My Account</Link></Button></li>
                    </ul>
                    <div className="sidebar-contact ">
                        <div>Our location</div>
                        <div>Log In / Sign Up</div>
                        <div>(+01) - 2345 - 6789</div>
                    </div>
                    <div className="sidebar-social">
                    <div className=" align-items-center py-5">
                            <h5 className='mb-2 text-g text-center'>Follow Us</h5>
                            <ul className='list list-inline mb-0 text-center'>
                                <li className='list-inline-item'><Link to={'#'}><FacebookOutlinedIcon /> </Link></li>
                                <li className='list-inline-item'><Link to={'#'}><TwitterIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><InstagramIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><PinterestIcon /></Link></li>
                                <li className='list-inline-item'><Link to={'#'}><YouTubeIcon /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
      
    </>
  )
}

export default Navigation
