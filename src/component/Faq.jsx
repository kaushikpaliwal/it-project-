import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
function Faq() {
  return ( 
    <>
    <Navbar/>
<div id="about-main">

<div className="about-page container  d-flex justify-content-center align-items-center text-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 >Team Details</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Team</span>
  </div>

    </div>
  </div>
</div>
</div>



<div className="container ">
  <div className="row">
    <div className="col-lg-3 faq">
      <ol>
        <li>
         <NavLink href=""  className='links'>Marketing</NavLink> </li>
        <li><NavLink href="" className='links'>Buying</NavLink> </li>
        <li><NavLink href="" className='links'>User Manual</NavLink> </li>
        <li> <NavLink href="" className='links'>Payment</NavLink></li>
        <li> <NavLink href="" className='links'>Terms & conditions</NavLink> </li>
        <li> <NavLink href="" className='links'>Account</NavLink></li>
      </ol>
    </div>
    <div className="col-lg-9 acordions">
      <h2 className='mx-2'>Marketing</h2>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       What is Web Hosting?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      
      How do you weigh different criteria in your process?
										      	
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

      If I already have NavLink website, can I transfer it to your web hosting?
										      	      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, NavLink bit more representative of how this would look in NavLink real-world application.</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">

      How can I accept credit cards online?
										      	      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">

      How does Your Pricing Work?
										      	      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
       What can I use to Build My Website
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  
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

export default Faq;