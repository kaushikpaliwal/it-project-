import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import Pricing from './pricing';
import { NavLink } from 'react-router-dom';
function PricingPage() {
  return ( 

    <>
    <Navbar/>
    <div id="about-main">
        

        <div className="about-page container  d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-lg-12  ">
          <h2 >Our Pricing</h2>
          <div className="content">
          <NavLink to={'/'}  
          className="navigation-main">Home</NavLink>
          
          
          <span className='about'>Pricing</span>
          </div>
        
            </div>
          </div>
        </div>
        </div>

   <Pricing/>



<hr />

   <div className="container pricing-con">
    <div className="content text-center">

    <div className="sc-title">Pricing & Plan</div>
    <p>No Hidden Cost. Choose <br /> your plan.</p>
    </div>

    <div className="row">
    <div class="col-lg-4 col-sm-6 text-center aos-init aos-animate" data-aos="fade-right">
										<div class="pr-table-wrapper tran3s mt-40">
											<div class="pack-name">Standard</div>
											<div class="price"><sup>$</sup>0</div>
											<ul class="pr-feature style-none">
												<li>1 Domain</li>
												<li>1 Year Premium Support</li>
												<li>Team fundraising</li>
											</ul>
											<a href="#" class="btn-seven w-100 mt-50">Choose Plan</a>
										</div>
                     {/* <!-- /.pr-table-wrapper --> */}
									</div>

                  <div class="col-lg-4 col-sm-6 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
										<div class="pr-table-wrapper tran3s mt-40 active">
											<div class="pack-name">Gold</div>
											<div class="price"><sup>$</sup>27. <sup>99</sup></div>
											<ul class="pr-feature style-none">
												<li>1 Domain</li>
												<li>1 Year Premium Support</li>
												<li>Team fundraising</li>
											</ul>
											<a href="#" class="btn-seven w-100 mt-50">Choose Plan</a>
										</div> 
                    {/* <!-- /.pr-table-wrapper --> */}
									</div>

                  <div class="col-lg-4 col-sm-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="100">
										<div class="pr-table-wrapper tran3s mt-40 active">
											<div class="pack-name">Gold</div>
											<div class="price"><sup>$</sup>27. <sup>99</sup></div>
											<ul class="pr-feature style-none">
												<li>1 Domain</li>
												<li>1 Year Premium Support</li>
												<li>Team fundraising</li>
											</ul>
											<a href="#" class="btn-seven w-100 mt-50">Choose Plan</a>
										</div>
                     {/* <!-- /.pr-table-wrapper --> */}
									</div>
    </div>
    <p className='text-center'>We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.</p>
   </div>
    <Footer/>
    </>
   );
}

export default PricingPage;