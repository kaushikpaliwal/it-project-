import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
function PortfolioDetails() {
  return ( 
    <>
    <Navbar/>
       <div id="about-main">

<div className="about-page container  d-flex justify-content-center align-items-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 >Portfolio</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Portfolio</span>
 

  </div>

    </div>
  </div>
</div>
</div>


<div className="container port-detail-con">
  <div className="row ">
    <div className="col-lg-6 px-5 detail-con">
      <p>REDESIGN, BRANDING</p>
      <h2>Website page re-design with Branding.</h2>
      <p className='para'>We’ve created a unique visual system and strategy across the wide existing spectrum of visible mobile applications & found yourself in a wide, straggling with.</p>
    </div>
    <div className="col-lg-6 px-5">
    <div className="row my-4 ">
      <div className="col-lg-6 col-md-6 col-sm-6">
        <h6>DATE</h6>
        <h3>23 July, 2020</h3>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6"><h6>CLIENT</h6>
      <h3>17 Riverwood Drive, Central Califirnia, USA</h3></div>
      <div className="col-lg-6 col-md-6 col-sm-6 mt-5"><h6>PROJECTTYPE</h6>
      <h3>Branding, Interface Design & User Exprience</h3></div>
      <div className="col-lg-6 col-md-6 col-sm-6 mt-5"><h6>DURATION</h6>
      <h3>2 Months 18 Days</h3></div>
      <div className="col-lg-12">
        <div className="icons">
        <FaPinterest className="icon"/>
        <FaTwitter className="icon"/>
        <FaLinkedinIn className="icon" />
        </div>
      </div>
    </div>
    
    </div>
  </div>
  

<div className="img-con col-lg-12">

    <img src="images/gallery/img_21.jpg" alt=""className='img-fluid' />
    
    <div className="icon-con col-lg-12">


    <NavLink to={'/portfoliodetails'}><FaPlus className='plus-con'/></NavLink>
      </div>
 
    </div>


 


</div>
<div className="container">

<div className="row sec-detail gx-5">
  <h2>Working Process</h2>
  <div className="col-lg-4 box">
    <div className="content">
<div className="latter">1</div>
    <h4>Research</h4>
    <p>Collect data and ger ready for research.</p>
    </div>
  </div>
  <div className="col-lg-4 box">
  <div className="content">
  <div className="latter">2</div>
  <h4>Identify Problem</h4>
  <p>Then we find the problem with our ai.</p>
  </div>
  </div>
  <div className="col-lg-4 box">
    <div className="content">
    <div className="latter">3</div>
  <h4>Resolve Problem</h4>
  <p>Now it’s time to fix the issue by advance ai.</p>
    </div>
  </div>
 </div>

<hr />

<div className="container last-con">
  <div className="row">
    <div className="col-lg-6 first-con-l-f-p">

    <h2>The Challange</h2>
    <p>Complete lineup of features from any major Maecena quis interdu, orci at euis dapibus, mass pharet ellus done. Any right to find fault with a man who chooses to enjoy a pleasure that has annoying consequences, or one who avoids.</p>
    </div>
    <div className="col-lg-6 first-con-l-l-p">
      <h2>Our Goal</h2>
      <p><FaCheck className='icon' />
      Various analysis options with ai.</p>
      <p><FaCheck className='icon' />
      Page Load (time, number of requests) lorem quis.</p>
      <p><FaCheck className='icon' />
      Big data analysis with fast process.R</p>
      <p><FaCheck className='icon' />
      Lorem analysis somthing quis dummy.</p>
    </div>
    <hr />
    <div className="col-lg-12 l-para">
      <h2>Result</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>

</div>
 {/* query-form----------------------------------- */}

 <QueryForm/>
<Footer/>
</>
   );
}

export default PortfolioDetails;