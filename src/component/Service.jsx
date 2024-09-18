import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { GiNetworkBars } from "react-icons/gi";
import Aos from 'aos'
import Footer from './Footer';
import { useEffect} from 'react';
import 'aos/dist/aos.css'
import SlickSliderRow from './SlickSliderRow';
import Navbar from './Navbar';
import QueryForm from './QueryForm';
import { FaArrowUp } from 'react-icons/fa';
function Service() {
    useEffect(()=>{
      Aos.init();
    },[])
  return (  
    <>
    <Navbar/>
    <NavLink to={'#'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
    <div id="about-main">

<div className="about-page container  d-flex justify-content-center align-items-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 >Services</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Services</span>
 

  </div>

    </div>
  </div>
</div>
</div>
<div className="container">


<div className=" card-con">
  <div className="row ">
<div className="col-lg-3 col-md-6">

<div className="boxs  ">
    <div className="card-body">

  <FaCirclePlay className='icon'/>
  <h5>Video Intelligence</h5>
  <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
  <GoArrowRight className='icon-last'/>
    </div>

  </div>
</div>
<div className=" col-lg-3 col-md-6">

  <div className="boxs  ">
  <div className="card-body">
  <BsFillPersonFill className='icon'/>
  <h5>Machine Learning</h5>
  <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
  <GoArrowRight className='icon-last'/>
</div>
  </div>
</div>
<div className="col-lg-3 col-md-6">

  <div className="boxs ">
  <HiEye className='icon'/>
  <h5>Voice Tracking
  </h5>
  <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
  <GoArrowRight className='icon-last'/>

  </div>
</div>
<div className="col-lg-3 col-md-6">

  <div className="boxs ">
  <GiNetworkBars  className='icon'/>
  <h5>Data Analysis</h5>
  <p>Convert data nois intelligent insights for quis competitive differentiation.</p>
  <GoArrowRight className='icon-last'/>

  </div>
</div>
 
  </div>
</div>
</div>


 {/* why choos us---------------------------------------- */}
<div className="container">

 <div className="choose-container sr-con">

<div className=" choose-us-container">
  <div className="row">
  <div className="col-lg-6 choose-img"><img src="images/choose-img-1.avif" alt="" className='img-fluid '/></div>
  <div className="col-lg-6 choose-us-content">
    <h6 >WHY CHOOSE US</h6>
    <h2>Why <span>choose us</span>  for your business.</h2>
    <p >Learn content by interacting with an expert lesson or watching a video.</p>
    <p >Learn content by interacting with an expert lesson or watching a video.</p>
    <p >Learn content by interacting with an expert lesson or watching a video.</p>
  </div>
  </div>
</div>

</div>
</div>

   {/* testimonials----------------------------------------------------------- */}


<div className="container testimonials-container ">
<div className="testimonials ">


<h6 >TESTIMONIALS</h6>
<h2>Trsuted by <span>Clients</span></h2>


</div>
<SlickSliderRow />
</div>

{/* quary-form----------------------------------- */}

<QueryForm/>
<Footer/>
    </>
  );
}

export default Service;