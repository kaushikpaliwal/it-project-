import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SlickSliderRow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return ( 
    <>
    
   <div className="slider-container  container">
      <Slider {...settings}>
        <div className='contetnt-slider d-flex flex-column justify-content-between'>
          <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
    <p className='text-strat'>Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
    <div className="img-slick-slider d-flex">
      <img src=" images/author-2.png" alt=""  />
      <div className="name-person mx-3">
    <h5>Larry K. jind</h5>
    <h6>Social Media Manger</h6>
      </div>
    </div>
        </div>
        <div>
        <div className='contetnt-slider'>
          <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
    <p>Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
    <div className="img-slick-slider d-flex">
      <img src="images/author-2.png" alt="" />
      <div className="name-person  mx-3">
    <h5>Larry K. jind</h5>
    <h6>Social Media Manger</h6>
      </div>
    </div>
        </div>
        </div>
        <div>
        <div className='contetnt-slider'>
          <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
    <p>Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
    <div className="img-slick-slider d-flex">
      <img src="images/author-2.png" alt="" />
      <div className="name-person  mx-3">
    <h5>Larry K. jind</h5>
    <h6>Social Media Manger</h6>
      </div>
    </div>
        </div>
        </div>
        <div>
        <div className='contetnt-slider'>
          <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
    <p>Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
    <div className="img-slick-slider d-flex">
      <img src="images/author-2.png" alt="" />
      <div className="name-person  mx-3">
    <h5>Larry K. jind</h5>
    <h6>Social Media Manger</h6>
      </div>
    </div>
        </div>
        </div>
        
      </Slider>
    </div>


    </>
   );
}

export default SlickSliderRow;