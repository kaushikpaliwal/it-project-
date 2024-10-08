import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className=" bg-color-hide pb-1">

<nav className="navbar navbar-expand-lg  ">
<div className="container-fluid ">
<NavLink className="color navbar-brand pt-0" to="#" ><img src="images/Cloudtrix-Hub-Logo.svg" alt="" /></NavLink>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
  <ul className="navbar-nav   mb-lg-0">
    <li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/'}>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/service'}>Services</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/aboutus'}>About Us</NavLink>
    </li> 
    {/* <li className="nav-item dropdown">
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
</li> */}
    {/* <li className="nav-item dropdown">
      <NavLink className="color nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Services
      </NavLink>
      <ul className="dropdown-menu ">
        <li><NavLink className="dropdown-item bg-light text-dark "  to={'/service'}>Services</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
        <li><NavLink className=" dropdown-item bg-light text-dark"  to={'/servicedetails'} >Services Details</NavLink></li>
        <li><hr className="dropdown-divider"/></li>
      </ul>
    </li> */}
   
    

  

{/*       
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
</li> */}
<li className="nav-item">
      <NavLink className="color nav-link active" aria-current="page" to={'/contact'}>Contact Us</NavLink>
    </li>
  </ul>
  {/* <div className="con-ss"><NavLink to={'/signin'} 
  className='link'>
  <button className='btns-nav'>Sign In</button></NavLink>
  <NavLink to={'/signup'}
  className='link'><button className='btns-nav'> Sign Up</button></NavLink>
 </div> */}
</div>
</div>
</nav>



</div>
    </>
    );
}

export default Navbar;