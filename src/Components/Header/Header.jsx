import React, { useEffect, useRef, useState } from "react";
import "../Header/Header.css";
import "../../App.css";
import Logo from "../../assets/images/logo.svg";
import logo from '../../assets/images/profile.png';
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from "@mui/material";
import Navigation from '../Header/Navigation/Navigation';

function Header() {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    const headerRef=useRef();



  const [categories, setCategories] = useState([
    "Milks and Dairies",
    "Wines & Drink",
    "Clothing & beauty",
    "fresh Seafood",
    "Pet foods & Toy",
    "Fast food",
    "Baking Material",
    "Vegatable",
    "Fresh Fruits",
    "Bread and Juice",
    "Milk and Dairie",
    "Wines & Drink",
    "Clothing & beauty",
    "fresh Seafood",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          // console.log(res.data.data);
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            //console.log(item.country)
          });

          //console.log(res.data.data.country)
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      let position =window.pageYOffset;
      if(position>100){
        headerRef.current.classList.add("fixed");
      }else{
        headerRef.current.classList.remove("fixed");
      }
    })
  })
  return (
    <>
    <div className="headerWrapper" ref={headerRef}>
    <header>
        <div className="container-fluid">
          <div className="row d-flex align-items-center headersection ">
            <div className="col-lg-2">
              <img className="lg" src={Logo} />
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="headerSearch d-flex align-items-center">
                <Select
                  data={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />
                <div className="search">
                  <input type="text" placeholder="search for items..." />
                  <i class="bi bi-search searchIcon cursor"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center  headericon">
              <div className="ml-auto d-flex align-items-center">
                <div className="countryWrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnOutlinedIcon style={{ opacity: "0.5" }} />}
                  />
                </div>
                <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                <ul className="list list-inline mb-0 headerTabs ">
                  <li className="list-inline-item d-none-mobile-tablet">
                    <span>
                      {" "}
                      <img src={IconCompare} alt="" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      {" "}
                      <img src={IconHeart} alt="" />
                      <span className="badge bg-success rounded-circle">6</span>
                      Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      {" "}
                      <img src={IconCart} alt="" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item d-none-mobile-tablet" >

                 <span onClick={()=>setIsOpenDropDown(!isOpenDropDown)}>
                      <img src={IconUser} alt="" />
                      Account
                    </span>
                    {
                        isOpenDropDown!==false &&
                  
                    <ul className="dropdownMenu">
                      <li>
                        <Button className="align-items-center"><PersonOutlinedIcon/> My Account</Button>

                      </li>
                      <li>
                        <Button><LocationOnOutlinedIcon /> Order Tracking</Button>
                        
                      </li>
                      <li>
                        <Button> <FavoriteBorderOutlinedIcon /> My Wishlist </Button>
                        
                      </li>
                      <li>
                        <Button> <SettingsOutlinedIcon /> setting</Button>
                        
                      </li>
                      <li>
                        <Button> <LogoutOutlinedIcon /> Sing Out</Button>
                        
                      </li>
                    </ul>
                      }
                  </li>
                </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

    </div>
      
    </>
  );
}

export default Header;
