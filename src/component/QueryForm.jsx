import React, { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
function QueryForm() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <div className="container query-container">
      <div className=" row d-flex align-items-center query-s-con ">
        <div className="heading col-lg-6 text-lg-start text-center ">

        <h2 >Having any Query? Book an appointment.</h2>
        </div>
        <div className='col-lg-6 text-lg-end text-center'>

        <button className='btn ' >Send a Mssage</button>
        </div>
      </div>
    </div>
    </>
    );
}

export default QueryForm;