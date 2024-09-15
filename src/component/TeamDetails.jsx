import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
function TeamDetails() {
  return ( 
    <>
    <Navbar/>
    <div id="about-main">
<div className="container">

<div className="about-page   d-flex justify-content-center align-items-center text-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 >Team Details</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Team</span>
  </div>

    </div>
  </div>
</div>
</div>
</div>


    <div className="container details-con">
      <div className="row  ">
        <div className="col-lg-6">
          <img src="images/team-7.jpg" alt="" className='img-fluid'/>
        </div>
        <div className="col-lg-6 team-details">
    <h5>
    About Me</h5>
    <h2>
Elliot S. Acevedo</h2>
<p>Senior Product Designer</p>
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut e massa Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna.</p>

      <div className="row main-detail-person">
        <div className="col-lg-6 detail detail-one">
          <h6>Email:</h6>
          <h4>your@email.com</h4>
        </div>
        <div className="col-lg-6  detail detail-two">
        <h6>Phone:</h6>
        <h4>+91 0000 0000</h4>
        </div>
        <div className="col-lg-6  detail detail-three">
        <h6>Location</h6>
        <h4>Give your Location</h4>
        </div>
        <div className="col-lg-6  detail detail-four">
        <h6>Experience</h6>
        <h4>06+ Years</h4>
        </div>
      </div>
        <button type="button" className="btn ">Contact Me</button>
        </div>
      </div>
    </div>
    {/* quary-form----------------------------------- */}

<QueryForm/>
<Footer/>
    </>
   );
}

export default TeamDetails;