import React from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import Slider from "react-slick";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <>

      <div className='search-bar'>
          <i className='fas fa-search'></i>
          <input type="search" placeholder='검색' />
          <button><AiOutlineSearch /></button>
      </div>
      <div>
        <div className='regi'>
          <Link to="./register">
            <button className='mainbutton'>
              Sing in
            </button>
          </Link>
        </div>
        <div className='login'>
          <Link to="./login">
            <button className='mainbutton'>
              Login
            </button>
          </Link>
        </div>
        
        <h1><Link to='/main'><button className='mainicon'><img src='https://o.remove.bg/downloads/2676e9ee-1bc9-49c8-9795-6d47e704bc04/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C-removebg-preview.png'/>
        </button>
        </Link></h1>
        <h2>Menu
          <Link to="./calender"><button className='menubarbutton'>Notes</button></Link>
          <Link to="./calender"><button className='menubarbutton'>Notice</button></Link>
        </h2>

        {/* <div className='slick-slider'>
          <Slider {...settings}>
          <div>
            <h3><img width={'500px'}height={'280px'} src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" alt="" /></h3>
          </div>
          <div>
            <h3><img width={'500px'}height={'280px'} src="https://images.alphacoders.com/109/1096498.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img width={'500px'}height={'280px'} src="https://wallpaperaccess.com/full/2529320.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img width={'500px'}height={'280px'} src="https://live.staticflickr.com/4349/36735421673_7d2e84d353_b.jpg" alt="" /></h3>
          </div>
          </Slider>
        </div> */}
      </div>
    </>
  );
};

export default Main;