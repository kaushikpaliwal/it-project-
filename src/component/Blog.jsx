import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import Footer from './Footer';import { IoIosSearch } from "react-icons/io";
import Navbar from './Navbar';
import QueryForm from './QueryForm';
import { FaArrowUp } from "react-icons/fa";

function Blog() {
  return (  
    <>
    <Navbar/>
    <NavLink to={'/'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
    <div id="about-main">
        

        <div className="about-page container  d-flex justify-content-center align-items-center">
          <div className="row ">
            <div className="col-lg-12 text-center ">
          <h2 className='text-break  '>Blog Standard</h2>
          <div className="content">
          <NavLink to={'/'} className="navigation-main">Home</NavLink>
          <span className='about'>Blog</span>
          </div>
        
            </div>
          </div>
        </div>
        </div>

        <div className="container my-0">
  <div className="row  blog-con">
  
   
    <div className="col-lg-8 blog-container my-5">
   <div className="borde">
    <NavLink>
      
    <img src="images/blog/blog_img_20.jpg" className='img-fluid' alt="" />
    </NavLink>
    <div className="details-card">

    
      <div className="fr-con">
    <NavLink className='link'>

    <h6>
    UI/UX Design 
    </h6>
    </NavLink>
    <p> - 10 minute read</p>
      </div>
    <NavLink className='link'>
      
    <h4>Technology we use</h4>
    </NavLink>
    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci massa ante pharetra tellus interdum...
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum?<NavLink className='link-para'>[Read More]</NavLink>
    </p>
    </div>
   </div>
   <div className="borde">
    <NavLink>
      
    <img src="images/blog/blog_img_20.jpg" className='img-fluid' alt="" />
    </NavLink>
    <div className="details-card">

    
      <div className="fr-con">
    <NavLink className='link'>

    <h6>
    UI/UX Design 
    </h6>
    </NavLink>
    <p> - 10 minute read</p>
      </div>
    <NavLink className='link'>
      
    <h4>Technology we use</h4>
    </NavLink>
    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci massa ante pharetra tellus interdum...
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum?<NavLink className='link-para'>[Read More]</NavLink>
    </p>
    </div>
   </div>
   <div className="borde">
    <NavLink>
      
    <img src="images/blog/blog_img_20.jpg" className='img-fluid' alt="" />
    </NavLink>
    <div className="details-card">

    
      <div className="fr-con">
    <NavLink className='link'>

    <h6>
    UI/UX Design 
    </h6>
    </NavLink>
    <p> - 10 minute read</p>
      </div>
    <NavLink className='link'>
      
    <h4>Technology we use</h4>
    </NavLink>
    <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci massa ante pharetra tellus interdum...
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum?<NavLink className='link-para'>[Read More]</NavLink>
    </p>
    </div>
   </div>
  
   
    </div>
    <div className="col-lg-4 my-5 right-blog-con ">
    <div className="subscribe">
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
                <div className="service-category-con ">
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
{/* query-form------------------------------------------------ */}
<QueryForm/>
<Footer/>
    </>
  );
}

export default Blog;