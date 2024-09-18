import React from 'react';
import { NavLink } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';
import SlickSliderRow from './SlickSliderRow';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
import { FaArrowUp } from 'react-icons/fa';
function Testimonials() {
  return (
    <>
    <Navbar/>
    <NavLink to={'#'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
    <div id="about-main">

<div className="about-page container  d-flex justify-content-center align-items-center text-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 className='text-break '>Client Testimonials</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about '>Testimonials</span>
  </div>

    </div>
  </div>
</div>
</div>

<div className="container">

<SimpleSlider/>
</div>


{/* testimonials----------------------------------------------------------- */}


<div className="container testimonials-container  ">
<div className="testimonials ">


<h6 >TESTIMONIALS</h6>
<h2>Trsuted by <span>Clients</span></h2>


</div>
<SlickSliderRow />
</div>
{/* query-form----------------------------------- */}

<QueryForm/>
<Footer/>
    </>
    );
}

export default Testimonials;