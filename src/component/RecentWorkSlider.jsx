import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function RecentWorkSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 ,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
   
    <div className=" px-lg-5 recentwor-container">
<div className="row align-items-center gx-0">
 <div className="heading-con text-center">

    <h6 className='sc-title '>
      Our Work
    </h6>
    <h2 >
  Check Some of Our <br /> Recent Work.
</h2>
 </div>
  <div className="slider-container gx-0  container my-5">
      <Slider {...settings}>
        <div className='contetnt-slider slider-con  mb-4'>
         
   <div className="card ">
    <img src="images/gallery/img_02.jpg" alt="" className='img-fluid ' />
    <div className="content border">
      <h6>Data Research</h6>
      <h4>  Product Analysis</h4>
    </div>
   </div>
        </div>
        <div className='contetnt-slider slider-con'>
         
         <div className="card">
          <img src="images/gallery/img_02.jpg" alt="" />
          <div className="content">
      <h6>Design </h6>
      <h4>  UI,UX Design</h4>
    </div>
         </div>
              </div>
              <div className='contetnt-slider slider-con '>
         
   <div className="card">
    <img src="images/gallery/img_02.jpg" alt="" />
    <div className="content">
      <h6>Marketing </h6>
      <h4> Content Marketing</h4>
    </div>
   </div>
        </div>
        <div className='contetnt-slider slider-con '>
         
   <div className="card">
    <img src="images/gallery/img_02.jpg" alt="" />
    <div className="content">
      <h6>Devlopment</h6>
      <h4>Market System</h4>
    </div>
   </div>
        </div>
        <div className='contetnt-slider slider-con '>
         
   <div className="card">
    <img src="images/gallery/img_02.jpg" alt="" />
    <div className="content">
      <h6>Data Research</h6>
      <h4>  Product Analysis</h4>
    </div>
   </div>
        </div>
        <div className='contetnt-slider slider-con   '>
         
   <div className="card">
    <img src="images/gallery/img_02.jpg" alt="" />
    <div className="content">
      <h6>Data Research</h6>
      <h4> Product Analysis </h4>
    </div>
   </div>
        </div>
        
      </Slider>
    </div>
  
</div>





    </div>
    </>
    );
}

export default RecentWorkSlider;