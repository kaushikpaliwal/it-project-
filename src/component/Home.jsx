// import {  useState } from 'react';
// import ScrollTrigger from 'react-scroll-trigger';
import React from 'react';
import Footer from './Footer';
import { useEffect } from 'react';
import { FaAngleRight,FaCheck } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import RecentWorkSlider from './RecentWorkSlider';
import Pricing from './pricing';
function Home() {
 
  // const [counterOn, setCounterOn]=useState(false);
  useEffect(()=>{
    Aos.init();
  },[])
  return (  
    <>
    <div className=" bg-color-hide pb-1">

<nav className="navbar navbar-expand-lg  ">
<div className="container-fluid ">
<NavLink className="color navbar-brand pt-0" to="#" >Navbar</NavLink>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
  <ul className="navbar-nav   mb-lg-0">
    <li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/'}>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/aboutus'}>About Us</NavLink>
    </li> 
    <li className="nav-item dropdown">
      <NavLink className="color nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       pages
      </NavLink>
    <ul className="dropdown-menu ">
    <li><NavLink className=" dropdown-item bg-light text-dark "  to={'/portfolio'}>Portfolio</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark"  to={'/portfoliodetails'} >Portfolio Details</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark "  to={'/team'}>Team</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark"  to={'/teamdetails'} >Team Details</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
    <li className="nav-item">
      <NavLink className="dropdown-item bg-light text-dark" aria-current="page" to={'/Faq'}>Faq</NavLink>
    </li> 
    <li><hr className="dropdown-divider"/></li>
    <li className="nav-item">
      <NavLink className="dropdown-item bg-light text-dark" aria-current="page" to={'/testimonials'}>Testimonials</NavLink>
    </li>
      </ul>
</li>
    <li className="nav-item dropdown">
      <NavLink className="color nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Services
      </NavLink>
      <ul className="dropdown-menu ">
        <li><NavLink className="dropdown-item bg-light text-dark "  to={'/service'}>Services</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark"  to={'/servicedetails'} >Services Details</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
      </ul>
    </li>
   
    

  

      
    <li className="nav-item dropdown">
      <NavLink className="color nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Blog
      </NavLink>
    <ul className="dropdown-menu ">
        <li><NavLink className="r dropdown-item bg-light text-dark "  to={'/blog'}>Blog</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark"  to={'/blogdetails'} >Blog Details</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
      </ul>
</li>
<li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/contact'}>Contact</NavLink>
    </li>
  </ul>
 <div className="con-ss">
  <button className='btns-nav'><NavLink to={'/signin'} 
  className='link'>Sign In</NavLink></button>
  <button className='btns-nav'><NavLink to={'/signup'}
  className='link'> Sign Up</NavLink></button>
 </div>
</div>
</div>
</nav>
</div>
    <div className="hero-banner ">

 <div className="container ">
  <div className="row ">
    <div className="col-lg-6 col-sm-12 content ">
      
      <NavLink href="" className="slogan col-sm=12"><strong>Offer</strong> is going on till friday, $1.99/mo.
    <FaAngleRight className='hero-content-icon'/>
    </NavLink>
   
    <h1 className="hero-heading text-break ">Ai &amp; Data Machine deep Learning.</h1>
   
    <p className="text-lg mb-60 lg-mb-40 hero-para">
                Sinco delivered blazing fast, striking ai solution
              </p>
              <ul className="style-none button-group d-lg-flex align-items-center">
								<li className="me-4"><NavLink href="contact-us.html" className="btn-one ripple-btn"><button type="button" className="btn btn-primary">Start Free Trial</button></NavLink></li>
								<li className="help-btn">Need any help? <NavLink href="contact-us.html">Contact us</NavLink></li>
							</ul>
    </div>
    
    <div className="col-lg-6 illustration-holder ">
    <img src="images/hero-img.svg" alt="" className="main-illustration  img-fluid"/>
					<img src="images/assets/ils_01_1.svg" alt="" className="shapes shape-one"/>
					<img src="images/assets/ils_01_3.svg" alt="" className="shapes shape-three"/>
					<img src="images/assets/ils_01_4.svg" alt="" className="shapes shape-four"/>
					<img src="images/assets/ils_01_5.svg" alt="" className="shapes shape-five"/>
					<img src="images/assets/ils_01_6.svg" alt="" className="shapes shape-six"/>
          <div className="card-one shapes">
						<div className="icon ">
              <FaCheck />
              </div>

            <div className="illustration-content ">
						<h6>Data Automation <br/>Solution.</h6>
						<span className="info">Faster Process</span>
            </div>
            
					</div>
          <div className="card-two shapes">
						<div className="icon ">
              <FaCheck  />
              </div>
						<h6>Data Quality Audit</h6>
					</div>
    </div>
    </div>
 
 </div>
    </div>


    {/* Services-container........................... */}

    <div className="services-container container">
      <div className="services-first-container">

      <h2 className='mb-4'>Services</h2>
      <h4 className='mt-2'>Our Experties field.  </h4>
      <h6 className='mt-2'>Sinco is data science, machine learning & artificial intelligence. </h6>
      
      
      </div>
      <div className="services-two-container row d-flex flex-wrap">
      
      <div className="box "  >
        <img src="images/icon/icon_03.svg" alt="" />
        <h5 className="mb-40">AI, Machine Learning</h5>
        <NavLink href="#" className="btn-two" >Learn more 
          <FaAngleRight />
          </NavLink>
      </div>
      <div className="box "  >
        <img src="images/icon/icon_04.svg" alt="" />
        <h5 className="mb-40">Data Development</h5>
        <NavLink href="#" className="btn-two" >Learn more
           <FaAngleRight />
           </NavLink>
      </div>
      <div className="box " >
        <img src="images/icon/icon_02.svg" alt="" />
        <h5 className="mb-40">Big Data Consulting</h5>
        <NavLink href="#" className="btn-two" >Learn more 
          <FaAngleRight />
          </NavLink>
      </div>
      <div className="box "  >
        <img src="images/fav-icon/icon.png" alt="" />
        <h5 className="mb-40">Data Machine Learning</h5>
        <NavLink href="#" className="btn-two" >Learn more 
          <FaAngleRight />
          </NavLink>
      </div>


      </div>
      <div className="para">

      <p> For more details. <NavLink href="#"><strong>Click here</strong>
      <FaAngleRight />
      </NavLink></p>
      </div>
    </div>


  {/* over Client page....................................... */}
    <div className="over-client">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pe-lg-5 "> <div className="img-client-one" data-aos="fade-up">
  <img src="images/over-client.avif" alt="" className='img-fluid ' />
  </div></div>
          <div className="col-lg-6 ">
          <div className="over-client-content" data-aos="fade-down">
<span className="sc-title col-lg-4 col-md-4  col-sm-4 col-12">Over 150k+ Client</span>
									<h2 className="main-title">We offer Real-time Data Solutions.</h2>
                  <p className='para-one'>Sinco is data science, machine learning and artificial intelligence provide business solution.</p>
                 <ul>
                  <div className="li-items">
                  <FaCheck className='check'/>
                  <li>Various analysis options.</li>
                  </div>
                  <div className="li-items">
                  <FaCheck  className='check'/>
                  <li>Big data analysis.</li>
                  </div>
                  <div className="li-items">
                  <FaCheck className='check'/>
                  <li>Page Load (time, size, number of requests).
                  </li>
                  </div>
                 </ul>
                 <div className="para">

<p> For more details. <NavLink href=""><strong>Click here</strong>
<FaAngleRight />
</NavLink></p>
</div>
</div>
          </div>
        </div>
      </div>
    </div>

{/* counter................................................................................ */}

<div id="counter" className='container'>
  <div className="counter-details">
    {/* <ScrollTrigger onEnter={()=> setCounterOn(true)}onExit={()=>setCounterOn(false)}> */}

    <h2>
        {/* {counterOn &&<CountUp  strat={0} end={2} duration={5} delay={0}/>} */}
      Mil</h2>
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
    <p>Generated revenue by
    AI Solutions</p>
  </div>

</div>

{/* working-part................................................................................ */}
<div className="over-client working-part">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-lg-6">
          <div className="over-client-content" data-aos="fade-down">
<div className="sc-title col-lg-4 col-md-4  col-sm-4 ">Working Process</div>
									<h2 className="main-title">Let’s see how do we works.</h2>
                  <p className='para-one'>
                  Sinco is data science, machine learning and artificial intelligence provide business solution and delivered blazing fast, striking result.</p>
                 
                 <div className="para">

<p> For more details. <NavLink href=""><strong>Click here</strong>
<FaAngleRight />
</NavLink></p>
</div>
</div>
          </div>
          <div className="col-lg-6 "> <div className="working-img" data-aos="fade-up">
  <img src="images/working-img.png" alt="" className='img-fluid working-img pt-0 mt-0' />
  </div></div>
        </div>
      </div>
      <div className="contianer-boxes-item ">
    <div className="box " data-aos="zoom-in">
      <h2>1</h2>
      <div className="content">

      <h5>Data Automation Solution.</h5>
      <p>Learn content by interacting quis expert lesson NavLink video.</p>
      </div>
    </div>
    <div className="box" data-aos="zoom-in"> <h2>2</h2>
      <div className="content">

      <h5>Analytics Business.</h5>
      <p>Practice what you realistic SAT  test questions.</p>
      </div></div>
    <div className="box" data-aos="zoom-in"> <h2>3</h2>
      <div className="content">

      <h5>NavLink New Breed Of AI.</h5>
      <p>Review your practice and learn how  to improve.</p>
      </div></div>
  </div>
    </div>



<Pricing/>

  <Footer/>
    </>
  );
}

export default Home;