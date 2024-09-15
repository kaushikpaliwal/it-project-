import React from 'react';
function Pricing() {
  return (
    <>
    <div className="pricing-container">

    <div className="pricing-section-one mt-150 lg-mt-110">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-7 col-md-9 m-auto">
              <div className="title-style-one text-center">
                <h2 className="main-title fs-1">
                  Solo, Agency or Team? We’ve got you Covered
                </h2>
              </div>
              {/* <!-- /.title-style-one --> */}
            </div>
          </div>

          <ul className="nav  justify-content-center pricing-nav-one pricing-nav-tab" role="tablist">
            <li className="nav-item">
              <button className="nav-link active " data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab">
                Monthly
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#year" type="button" role="tab">
                Yearly
              </button>
            </li>
          </ul>
        </div>
        {/* <!-- /.container --> */}

        <div className="pricing-table-area-one aos-init aos-animate pricing-table" data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <div className="tab-content">
              <div className="tab-pane active show" id="month">
                <div className="row gx-xxl-5 mt-4 ">
                  <div className="col-md-6  text-center">
                    <div className="pr-table-wrapper active md-mb-30 border">
                      <div className="pack-name">Business</div>
                      <div className="pack-details">
                        For individuals and teams. Get
                        <span>1 year <br/>
                          premium market access</span>
                      </div>
                      <div className="top-banner d-sm-flex justify-content-center align-items-center">
                        <div className="price"><sup>$</sup>75</div>
                        <div>
                          <span>Monthly membership</span>
                          <em>Starting at $75/mo with </em>
                        </div>
                      </div>
                      {/* <!-- /.top-banner --> */}
                      <ul className="pr-feature style-none ">
                        <li>Unlimited campaigns</li>
                        <li>Push Notifications</li>
                        <li>Team fundraising</li>
                      </ul>
                      <a href="pricing.html" className="trial-button ">Try us without risk.
                        <span>Choose plan <i className="fas fa-chevron-right"></i></span>
                      </a>
                    </div>
                    {/* <!-- /.pr-table-wrapper --> */}
                  </div>
                  <div className="col-md-6  text-center">
                    <div className="pr-table-wrapper border">
                      <div className="pack-name">Agency</div>
                      <div className="pack-details">
                        For big agency &amp; teams. Get
                        <span>1 year <br/>
                          premium market access</span>
                      </div>
                      <div className="top-banner d-sm-flex justify-content-center align-items-center">
                        <div className="price"><sup>$</sup>99</div>
                        <div>
                          <span>Monthly membership</span>
                          <em>Starting at $99/mo with </em>
                        </div>
                      </div>
                      {/* <!-- /.top-banner --> */}
                      <ul className="pr-feature style-none">
                        <li>Unlimited campaigns</li>
                        <li>Push Notifications</li>
                        <li>Team fundraising</li>
                      </ul>
                      <a href="pricing.html" className="trial-button">Try us without risk.
                        <span>Choose plan <i className="fas fa-chevron-right"></i></span>
                      </a>
                    </div>
                    {/* <!-- /.pr-table-wrapper --> */}
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="year">
                <div className="row gx-xxl-5 mt-4">
                  <div className="col-md-6 text-center ">
                    <div className="pr-table-wrapper active md-mb-30 border">
                      <div className="pack-name">Business</div>
                      <div className="pack-details">
                        For individuals and teams. Get
                        <span>2 year <br/>
                          premium market access</span>
                      </div>
                      <div className="top-banner d-sm-flex justify-content-center align-items-center">
                        <div className="price"><sup>$</sup>69</div>
                        <div>
                          <span>Yearly membership</span>
                          <em>Starting at $69/mo with </em>
                        </div>
                      </div>
                      {/* <!-- /.top-banner --> */}
                      <ul className="pr-feature style-none">
                        <li>Unlimited campaigns</li>
                        <li>Push Notifications</li>
                        <li>Team fundraising</li>
                      </ul>
                      <a href="pricing.html" className="trial-button">Try us without risk.
                        <span>Choose plan <i className="fas fa-chevron-right"></i></span>
                      </a>
                    </div>
                    {/* <!-- /.pr-table-wrapper --> */}
                  </div>
                  <div className="col-md-6 text-center">
                    <div className="pr-table-wrapper border">
                      <div className="pack-name">Agency</div>
                      <div className="pack-details">
                        For big agency &amp; teams. Get
                        <span>2 year <br/>
                          premium market access</span>
                      </div>
                      <div className="top-banner d-sm-flex justify-content-center align-items-center">
                        <div className="price"><sup>$</sup>97</div>
                        <div>
                          <span>Yearly membership</span>
                          <em>Starting at $97/mo with </em>
                        </div>
                      </div>
                      {/* <!-- /.top-banner --> */}
                      <ul className="pr-feature style-none">
                        <li>Unlimited campaigns</li>
                        <li>Push Notifications</li>
                        <li>Team fundraising</li>
                      </ul>
                      <a href="pricing.html" className="trial-button">Try us without risk.
                        <span>Choose plan <i className="fas fa-chevron-right"></i></span>
                      </a>
                    </div>
                    {/* <!-- /.pr-table-wrapper --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.tab-content --> */}

            <div className="msg-note mt-80 lg-mt-50 aos-init aos-animate my-5 text-center" data-aos="fade-up">
              If you Need any Custom or others Pricing System. <br/>
              Please <a href="contact-us.html" className='msg'>Send Message</a>
            </div>
          </div>
        </div>
        {/* <!-- /.pricing-table-area-one --> */}
      </div>
    </div>
    </>
    );
}

export default Pricing;