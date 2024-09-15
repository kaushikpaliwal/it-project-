import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiAchievement } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
function SimpleSlider() {
  let sliderRef = useRef(null);
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return ( 
    <>
    <div className="container slider-slick-container">

    <div className="slider-container">
      <Slider ref={ (sliderRef)}{...settings}>
        <div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12">
              <img src="images/media/img_06.jpg" className='img-fluid' alt="" />
            </div>
            <div className="col-lg-8  d-flex flex-column my-1  slide-slick-content">
            <GiAchievement className='my-3 icon' />
            <p>Certainly from my perspective been great success with lore giving that <NavLink href="#"
            className='link' >enterprises</NavLink> level magna assured quality due issue there live the blind texts separated.</p>

            <h5>__ Martin Jonas</h5>
            <h6>Head Of Marketing,inter inc.</h6>
              
              </div>
          </div>
        </div>
        <div>
        <div className="row">
            <div className="col-lg-4">
              <img src="images/media/img_06.jpg" className='img-fluid' alt="" />
            </div>
            <div className="col-lg-8  d-flex flex-column my-1  slide-slick-content">
            <GiAchievement className='my-3 icon' />
            <p>Having a home based business is a wonderful asset to your life. The problem still stands it comes time <NavLink href="#"
            className='link'>advertise</NavLink> your business for a cheap cost you have looked.</p>

            <h5>__ Martin Jonas</h5>
            <h6>Head Of Marketing,inter inc.</h6>
              
              </div>
          </div>
        </div>
        <div>
        <div className="row">
            <div className="col-lg-4">
              <img src="images/media/img_06.jpg" className='img-fluid' alt="" />
            </div>
            <div className="col-lg-8  d-flex flex-column my-1  slide-slick-content">
            <GiAchievement className='my-3 icon' />
            <p>It’s a great exprience to work with <NavLink href="#"
            className='link'>Sinco</NavLink>. They’r vey humble and expert the service has been excellent. The author is very quick and nice when it comes to support.</p>

            <h5>__ Martin Jonas</h5>
            <h6>Head Of Marketing,inter inc.</h6>
              
              </div>
          </div>
        </div>
        
      </Slider>
    </div>
    </div>
    </>
   );
}

export default SimpleSlider;