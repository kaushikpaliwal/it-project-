import React from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect} from 'react';
import Footer from './Footer';
// import {  useState } from 'react';

import { FaArrowUp } from "react-icons/fa";

import SlickSliderRow from './SlickSliderRow';
import Navbar from './Navbar';
function About() {
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
      <div className="col-lg-12 text-center ">
    <h2 >About Us</h2>
    <div className="content">
    <NavLink to={'/'} className="navigation-main">Home</NavLink>
    <span className='about'>About Us</span>
    </div>

      </div>
    </div>
  </div>
  </div>


{/* story container---------------------------------------------- */}
<div className="container">

    <div className=" story">
      <div className="row">
        <div className="col-lg-6 ">
          <img src="images/story.png" alt="img"  className='   img-story'/>
        </div>
        <div className="col-lg-6 content-story">
          <h4>Our story</h4>
          <h2>Navigating the frontier of our <i>intelligence</i></h2>
          <p>The narrative unfolds as we delve into the inception of our company, tracing the roots of our vision for a future intertwined with artificial intelligence. Through the lens of this captivating chronicle, readers will witness the trials and triumphs that have shaped. the story weaves together the intricate threads of innovation</p>
          <p>Through anecdotes and case studies, readers will witness the tangible difference our innovations make in fields ranging from healthcare and finance to education and beyond.

</p>
<button type="button" className="btn ">Know More</button>
        </div>
      </div>
        <div className="second-content row  ">

        <div className="col-lg-4 s-content px-lg-3" ><h3>Our History</h3><p>Except to obtain some advantage from it? But who has any right to find fault with a consequences.</p> </div>
        <div className="col-lg-4 s-content px-lg-3"><h3>Our Mission</h3>
        <p>Except to obtain some advantage from it? But who has any right to find fault with a consequences.</p></div>
        <div className="col-lg-4 s-content px-lg-3"><h3>Our Vission</h3>
        <p>Except to obtain some advantage from it? But who has any right to find fault with a consequences.</p></div>
        </div>

      
    </div>
</div>
   
   
    
    {/* why choos us---------------------------------------- */}
<div className="container">

<div className="choose-container">

<div className=" choose-us-container">
  <div className="row">
  <div className="col-lg-6 choose-img"><img src="images/choose-img-1.avif" alt="" className='img-fluid '/></div>
  <div className="col-lg-6 choose-us-content">
    <h6>WHY CHOOSE US</h6>
    <h2 >Why <span>choose us</span>  for your business.</h2>
    <p data-aos='fade-up'>Learn content by interacting with an expert lesson or watching a video.</p>
    <p data-aos='fade-up'>Learn content by interacting with an expert lesson or watching a video.</p>
    <p data-aos='fade-up'>Learn content by interacting with an expert lesson or watching a video.</p>
  </div>
  </div>
</div>
  

</div>
</div>

    {/* counter----------------------------------------------------------------
    */}
    <div id="counter" className='container about-con'>
  <div className="counter-details">
    {/* <ScrollTrigger onEnter={()=> setCounterOn(true)}onExit={()=>setCounterOn(false)}> */}

    <h2>
      {/* {counterOn &&<CountUp  strat={0} end={20} duration={2} delay={0}/>} */}
      20Mil</h2>
    {/* </ScrollTrigger> */}
    <p>Human labor hours saved
    with help of AI</p>
  </div>
  <div className="counter-details">
  {/* <ScrollTrigger onEnter={()=> setCounterOn(true)}onExit={()=>setCounterOn(false)}> */}

<h2>
  {/* {counterOn &&<CountUp  strat={0} end={2} duration={5} delay={0}/>} */}
  2b+</h2>
{/* </ScrollTrigger> */}
    <p>Generated revenue by
    AI Solutions</p>
  </div>
  <div className="counter-details">
  {/* <ScrollTrigger onEnter={()=> setCounterOn(true)}onExit={()=>setCounterOn(false)}> */}

<h2>$
  {/* {counterOn &&<CountUp  strat={0} end={50} duration={2} delay={0}/>} */}
  50Mil+</h2>
{/* </ScrollTrigger> */}
    <p>Saved operational costs
    due to AI</p>
  </div>

</div>


{/* testimonials----------------------------------------------------------- */}


<div className=" testimonials-container ">
<div className="testimonials text-center">


<h6 >TESTIMONIALS</h6>
<h2>Trusted by <span>Clients</span></h2>


</div>
<div className="container">

  <SlickSliderRow/>
</div>
</div>



<div className="container">
  
<div className=" contact-us-container container">
  <div className="row">
  <div className="col-lg-6 contact-us"><img src="images/choose-img-1.avif" alt="" className='img-fluid '/></div>
  <div className="col-lg-6 contact-us-content">
    <h6 >Contact us</h6>
    <h2>Get Ready to<span> Started.</span> It’s Fast & Easy.</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut quis nostrud ullamco laboris nisi.</p>
   <button type="button" className="btn ">Send Message</button>
  </div>
  </div>
</div>
</div>




<Footer/>

    </>
   );
}

export default About;