import React from 'react';
import { FaFacebookSquare ,FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { NavLink } from 'react-router-dom';

function Footer() {
  return ( 
    <>
  








     <div className="footer-container">
<div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 main content-con mb-3">
        <h3>Heading</h3>
        <p className='mt-4'>We will assist you in becoming more successful.</p>
        <div className="icons mt-4">
<FaFacebookSquare className='icon'/>
<FaTwitterSquare className='icon'/>
<FaLinkedin className='icon'/>
</div>

      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 content-con mt-3">
        <h3>Links</h3>
        <ul><li>
          <NavLink className='link' to={'/'}>Home</NavLink></li>
         <li> <NavLink className='link' to={'/pricing'}>Pricing</NavLink></li>
          <li><NavLink className='link' to={''}>About Us</NavLink></li>
         <li><NavLink className='link' to={''}>Service</NavLink></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 content-con mt-3">
        <h3>Leagal</h3>
        <ul>
          <li><NavLink className='link' to={''}>Terms of use</NavLink></li>
          <li><NavLink className='link' to={''}>Terms & conditions</NavLink></li>
          <li><NavLink className='link' to={''}>Privacy policy</NavLink></li>
          <li><NavLink className='link' to={''}>Cookie policy</NavLink></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 content-con mt-3">
        <h3>Subscribe</h3>
        <p>Join over  <NavLink className='link' to={''}>68,000 </NavLink> people getting our emails</p>
        <p>We only send interesting and relevant emails.</p>
      </div>
    </div>
     </div>
     <img src="images/element1.png" alt="" className='element-one' />
<img src="images/element2.png" alt="" className='element-two'/>
    </div>
    </>
   );
}

export default Footer;