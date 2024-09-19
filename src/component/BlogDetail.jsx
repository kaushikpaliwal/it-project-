import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';  
import { IoIosSearch } from "react-icons/io";
import { FaArrowUp, FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import QueryForm from './QueryForm';
function BlogDetail() {
  return ( 
     <>

<Navbar/>
<NavLink to={'#'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
   <div id="about-main">
        

        <div className="about-page container  d-flex justify-content-center align-items-center">
          <div className="row ">
            <div className="col-lg-12 text-center text-break ">
          <h2 >Blog Standard</h2>
          <div className="content">
          <NavLink to={'/'} className="navigation-main">Home</NavLink>
          <span className='about'>Blog</span>
          </div>
        
            </div>
          </div>
        </div>
        </div>



        <div className="container mb-0">
  <div className="row blog-con">
  
   
    <div className="col-lg-8  blog-container mt-3">
   <div className="borde">
    <NavLink>
      
    <img src="images/blog/blog_img_20.jpg" className='img-fluid' alt="" />
    </NavLink>
    <div className="details-card blog-detail-card">

    
      <div className="fr-con">
    <NavLink className='link'>

    <h6>
    UI/UX Design 
    </h6>
    </NavLink>
    <p> - 10 minute read</p>
      </div>
      
    <h4>How Ai Technology Work?</h4>
    
    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci mass ante pharetra tellus interdum. Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat, Suspendisse interdum consectetur vel facilisis volutpat est velit egestas.

    </p>
    <h5>This response is important htmlFor our ability to from mistakes but it alsogives rise to self-criticism.</h5>
    <p>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer. Lorem ipsum dolor sit amet, consectetur adipis elit quis extraction labore.</p>
<div className="content-links-blog row d-flex align-items-center justify-content-between">

    <p className='col-lg-6 col-md-6 '>Tag : 
      <NavLink className='f-links'> Chatboot</NavLink>
      <NavLink className='f-links'>,
Intelligence</NavLink>
      <NavLink className='f-links'>,Big Data</NavLink>
    </p>
    <p className='col-lg-6 col-md-6 d-flex align-items-center gap-1 '>
      Share :
      <NavLink className='l-links text-center'> <FaGoogle /></NavLink>
      <NavLink className='l-links'><FaTwitter /></NavLink>
      <NavLink className='l-links'><FaInstagram /></NavLink>
    </p>
</div>
    </div>
   </div>
   <div className="container mt-5">

 
  <div className="row comments-container px-5">
    <h2 className='mt-3 mb-5'> 2 Comments</h2>
    <div className="col-lg-10 col-md-10 col-sm-10 ">
  <img src="images/author-2.png" alt="" />

<div className="content">
  <h6>
  Al Hasani</h6>
<p className='time'>13 June, 2018, 7:30pm</p>
<p className='para'>One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience</p>
  </div>
    </div>
    <div className="col-lg-1 col-md-2 col-sm-1 ">
      <button><NavLink className='link-btn'>REPLY</NavLink></button>
    </div>
    <hr className='mt-4 mb-5 hr container'/>
    <div className="col-lg-10 col-md-10 col-sm-10">
  <img src="images/author-2.png" alt="" />

<div className="content">
  <h6>
  Al Hasani</h6>
<p className='time'>13 June, 2018, 7:30pm</p>
<p className='para'>One touch of a red-hot stove is usually all we need to avoid that kind of lorem discomfort in future. The same true we experience</p>
  </div>
    </div>
    <div className="col-lg-1 col-md-2 col-sm-1 ">
      <button><NavLink className='link-btn'>REPLY</NavLink></button>
    </div>
  </div>
  
  </div>
<div className=" px-3 mt-5 contact">
<h2 className='pt-4'>Leave a Comment</h2>
<p className='fs-5 mt-4 mb-5'><NavLink className='link'>Sign in</NavLink> to post your comment or signup if you dont have any account.</p>
<form className='row blog'>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label" >Name</label>
    <input type="text" className="form-control cont" id="exampleInputName"placeholder='Enter Your Name '/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control"placeholder='Enter Your Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3 mt-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Your Message'></textarea>
</div>
  <div className="container-btn">

  <button type="submit " className="btn last-btn-ss mt-2 mb-3">Post Comment</button>
  </div>


</form>
</div>
    </div>
    <div className="col-lg-4 my-3 ">
    <div className="subscribe blog-input-f">
 <form action="#" name='footer' id='foot'>
                 <input type="email" placeholder="Enter your email"/>
                 <IoIosSearch className='button'/>
               </form>
 </div>
                
                <div className="blog-category">
                <ul >
										<li className="current-page"><NavLink href="#" className="navlink">Machine Learning(03)</NavLink></li>
										<li><NavLink href="#" className="navlink">Big Data Services(05)</NavLink></li>
										<li><NavLink href="#"className="navlink">Chatboot(08)</NavLink></li>
										<li><NavLink href="#" className="navlink">User Analysis(10) </NavLink></li>
										<li><NavLink href="#" className="navlink">Artificial(02)</NavLink></li>
										<li><NavLink href="#" className="navlink">Intelligence(11)</NavLink></li>
									</ul>
                </div>

                <div className="keywords">
                  <h3>Keywords</h3>
                  <div className="row">

                  <div className=" d-flex flex-wrap col-12">

                <NavLink className='link mb-2'>IDEAS</NavLink>
                <NavLink  className='link mb-2'>ADUCATION</NavLink>
                <NavLink  className='link mb-2'>DATA</NavLink><br />
                <NavLink  className='link mb-2'>MACHINE</NavLink>
                <NavLink  className='link mb-2'>AI</NavLink><br />
                <NavLink  className='link mb-2'>INTELLIgent</NavLink>
                  </div>
                  </div>
                </div>
                <div className="service-category-con">
                  <div className="s-icons-con d-flex align-items-center justify-content-center">

                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                <FaStar className='s-icon'/>
                  </div>
                  <p className='text-center para'>They not only understand what I say but read between the lines and also give me ideas of my own.</p>
                  <h4>YOUR NAME, Designer</h4>
                </div>

               
    </div>
  </div>
</div>


        {/* quary-form------------------------------------------------ */}
<QueryForm/>
<Footer/>
    </>
     );
 
}

export default BlogDetail;