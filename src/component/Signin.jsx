import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
function Signin() {
  return ( 
    <>
    <Navbar/>
  <div className="container gx-0">
    <div className="row">
      <div className="col-lg-6 header-part text-center m-0">
        <h2>Want to take your business on
        the next level? </h2>
        <img src="images/assets/ils_22.svg" alt="" className='img-fluid' />
      </div>
      <div className="col-lg-6 m-0 content-container gx-5">
        <div className="content-ss">
          <div className="ss-contents">
          <div className=" d-flex justify-content-between ">
          <NavLink to={'/'}> <img src="images/Cloudtrix-Hub-Logo.svg" alt="" /></NavLink> 
            <button className='gtm'>Go To Home</button>
          </div>

          
          <h2>Hi buddy, welcome
          Back!</h2>

          <h3>Still don't have an account? <NavLink to={'/'} className='navlink'>Sign Up</NavLink></h3>

          <form className='row forms'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check d-flex justify-content-between">
    <div className="con">

    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">
      Keep Me Logged In</label>
    </div>

    <NavLink className='fpassword'>Foget Password</NavLink>
  </div>
  <button type="submit " className="btn last-btn-ss">Submit</button>
</form>
</div>
        </div>
      </div>
    </div>
  </div>
    </>
   );
}

export default Signin;