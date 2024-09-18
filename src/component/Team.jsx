import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
import { FaArrowUp } from 'react-icons/fa';
function Team() {
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
          <h2 >Our Team</h2>
          <div className="content">
          <NavLink to={'/'} className="navigation-main">Home</NavLink>
          <span className='about'>Team</span>
          </div>
        
            </div>
          </div>
        </div>
        </div>


<div className="container">
  
        <div className=" team-con">
          <div className="row d-flex justify-content-around ">
            <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink>
            <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink> <NavLink to={'/teamdetails'} className="col-lg-3 col-md-4 col-sm-5 teams-con">
            <div className="card team-con-r" >
  <img src="images/team/img_01.jpg" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h6 className='card-text text-center text-dark-bg-subtle'>Marketing Expert</h6>
    <h5 className='card-text text-center'> Muhibur Rashid</h5>
  </div>
</div>
            </NavLink>
</div>
</div>
</div>

 {/* query-form----------------------------------- */}

 <QueryForm/>
<Footer/>
    </>
   );
}

export default Team;