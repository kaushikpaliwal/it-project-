import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import QueryForm from './QueryForm';
function Contact() {
  return ( 
    <>
    <Navbar/>
    <div id="about-main">
        

        <div className="about-page container  d-flex justify-content-center align-items-center">
          <div className="row ">
            <div className="col-lg-12 text-center text-break ">
          <h2>Get in Touch</h2>
          <div className="content">
          <NavLink to={'/'} className="navigation-main">Home</NavLink>
          <span className='about'>Contact Us</span>
          </div>
        
            </div>
          </div>
        </div>
        </div>
        


    <div className="container">


        <div className="row con-card">
  <div className="col-lg-4 ">
    <div className="card cards py-5">
      <div className="card-body">
      <div className=" d-flex align-items-center flex-column " >

      <img src="
               /images/icon/icon_17.svg" alt="" />
        <div className="card-title"> <h3 className="card-title mt-3">
                Our Address
              </h3></div>
        <p className="card-text">  Ahemdabad, Gujarat Lorem ipsum <br /> dolor sit amet.</p>
        </div>
      </div>

    </div>
  </div>
  <div className="col-lg-4 ">
    <div className="card cards py-5">
      <div className="card-body">
      <div className=" d-flex align-items-center flex-column " >

      <img src="
              /images/icon/icon_17.svg" alt="" />
        <div className="card-title"> <h3 className="card-title mt-3">
                Our Address
              </h3></div>
        <p className="card-text">  Ahemdabad, Gujarat Lorem ipsum <br /> dolor sit amet.</p>
        </div>
      </div>

    </div>
  </div>
  <div className="col-lg-4 ">
    <div className="card cards py-5">
      <div className="card-body">
      <div className=" d-flex align-items-center flex-column " >

      <img src="
              /images/icon/icon_17.svg" alt="" />
        <div className="card-title"> <h3 className="card-title mt-3">
                Our Address
              </h3></div>
        <p className="card-text">  Ahemdabad, Gujarat Lorem ipsum <br /> dolor sit amet.</p>
        </div>
      </div>

    </div>
  </div>
  
</div>


    </div>





        
        
        <div className="container contact-page ">
<div className="row">

        <div className=" px-3 mt-3 contact col-lg-6 col-md-6 contact-main">
<h2 className='pt-1'>Send Message</h2>

<form className='row blog mt-4'>
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

  <button type="submit " className="btn last-btn-ss mt-4 mb-3">Send Message</button>
  </div>


</form>
</div>
<div className="col-lg-6 mt-3 col-md-6 ">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15049961972!2d72.5797426!3d23.020243400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1725115040444!5m2!1sen!2sin"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='iframe fluid-container' title='iframe'></iframe>
</div>
</div>
        </div>
          {/* query-form------------------------------------------------ */}
<QueryForm/>
<Footer/>
    </>
   );
}

export default Contact;