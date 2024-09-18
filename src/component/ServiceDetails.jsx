import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaArrowUp, FaRegFilePdf } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { HiEye } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
function ServiceDetails() {

  return (  
    <>
    <Navbar/>
    <NavLink to={'/'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
       <div id="about-main">
        

<div className="about-page container  d-flex justify-content-center align-items-center">
  <div className="row">
    <div className="col-lg-12 text-center ">
  <h2 >Machine Learning</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Services Details</span>
  </div>

    </div>
  </div>
</div>
</div>


{/* services -first-detail------------------------------------ */}
<div className="container">

<div className="content-sr-container">
  <div className="row">
    <div className="col-lg-6 content-sr" ><h6>content marketers</h6>
    <h2>Navigating the digital landscape with <i>content marketing
      </i> </h2>
    </div>
    <div className="col-lg-6 content-sr-para ">
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis l consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
      </p> <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna pellentesque


      </p>
    </div>
  </div>
</div>
</div>

<div className="img-detail-1 container">

<img src="images/service-detail-1.jpg"  alt="img"  className='img-fluid'/>
</div>


				{/* Service Details--------------------------------------------- */}
		

<div className="container">
  <div className="row ">
  
    <div className="col-lg-3">
    <div className="service-category mb-40">
									<ul >
										<li className="current-page"><NavLink href="#" className="navlink">Machine Learning</NavLink></li>
										<li><NavLink href="#" className="navlink">Big Data Services</NavLink></li>
										<li><NavLink href="#"className="navlink">Chatboot</NavLink></li>
										<li><NavLink href="#" className="navlink">User Analysis</NavLink></li>
										<li><NavLink href="#" className="navlink">Artificial</NavLink></li>
										<li><NavLink href="#" className="navlink">Intelligence</NavLink></li>
									</ul>
								</div>
                <div className="service-category-con">
                  <div className="s-icons-con d-flex align-items-center justify-content-center">

                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                  </div>
                  <p className='text-center para'> They not only understand what I say but read between the lines and also give me ideas of my own.</p>
                  <h4>YOUR NAME, Designer</h4>
                </div>

                <a href="#" className="d-flex tran3s mb-15 align-items-center content-pdfs">
               
                <FaRegFilePdf className='pdf-content'/>
										<span>Download PDF</span>
									</a>
                  <a href="#" className="d-flex tran3s mb-15 align-items-center content-pdfs">
                  <HiOutlineDocumentReport className='pdf-content '/>
										<span>Download PDF</span>
									</a>
    </div>
    <div className="col-lg-9 service-details-main"><h2>Delivering the insights you to help business growth</h2>
    <p>To take a trivial example, which of us ever under- takes laborious physical exercise, except to obtain some advantage from it but who has any right find fault with a man who chooses to enjoy a get pleasure that annoying. Undertakes laborious physical exercise, except to obtain some advantage from it but who has any find fault with a man who chooses.</p>
    <div className="sr-imgcon container d-flex justify-content-center">

    <img src="images/service-detail-3.avif" className='img-fluid' alt="" />
    </div>
    <h4>Technology we use</h4>
    <p>Evernote Web offers a complete lineup of features from any major Maecena quis interdum, orci at euis dapibus, mass ante pharetra tellus done.</p>
    <div className="card-s row  d-flex justify-content-around">
      <div className="cardi col-lg-3 text-center"><div className="box ">
  <BsFillPersonFill className='icon'/>
  <h5>C++ Coding</h5>
 

  </div></div>
  <div className="cardi col-lg-3 text-center"><div className="box ">
  <GiNetworkBars className='icon'/>
  <h5>AI Technology</h5>
 

  </div></div>
  <div className="cardi col-lg-3 text-center"><div className="box ">
  <HiEye  className='icon'/>
  <h5>Auto Algorithm</h5>
 

  </div></div>
    </div>
    <div className="container-content-gc row">
      <div className="container-g col-lg-6">
        <h3 >Our Goal
        </h3>
        <h6> <TiTick className='t-icon'/>Various analysis options.</h6>
        <h6> <TiTick className='t-icon'/>Page Load (time, number of requests).</h6>
        <h6> <TiTick className='t-icon'/>Big data analysis.</h6>
        <h6> <TiTick className='t-icon'/>Lorem analysis somthing</h6>
      </div>
      <div className="container-c col-lg-6">
      <h3>The Challange
      </h3>
      <p>Evernote Web offers a complete lineup of features from any major Maecena quis interdum, orci at euis dapibus, mass ante pharetra tellus done.</p>
      </div>
      <p className='l-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum.</p>
    </div>
    </div>
  </div>
</div>

{/* query-form------------------------------------------------ */}
<QueryForm/>
<Footer/>
    </>
  );
}

export default ServiceDetails;