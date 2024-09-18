import React from 'react';
import { NavLink } from 'react-router-dom';
function Error() {
  return (  
    <>
    
    <div className="container">

    <div className=" text-center error-page">
<div className="col-lg-12">

    <h2>Opps! you’r on the wrong place.</h2>
    <p>Can not find what you need? Take a moment and do a search below or start from our Homepage.</p>
    <NavLink to={'/'}><button>Back to Home</button></NavLink>
</div>
    <img src="images/assets/ils_21.svg" alt="" className='img-fluid' />
    </div>
    </div>
    </>
  );
}

export default Error;