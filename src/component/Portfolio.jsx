import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryForm from './QueryForm';
function Portfolio() {
  useEffect(()=>{
    Aos.init();
  },[])
  
  return ( 
    <>
    <Navbar/>
    <NavLink to={'/'} className='up-icon'>

<FaArrowUp  className='icon'/>
</NavLink>
    <div id="about-main">

<div className="about-page container  d-flex justify-content-center align-items-center">
  <div className="row">
    <div className="col-lg-12  ">
  <h2 >Portfolio</h2>
  <div className="content">
  <NavLink to={'/'} className="navigation-main">Home</NavLink>
  <span className='about'>Portfolio</span>
 

  </div>

    </div>
  </div>
</div>
</div>
    <div className="container">

   <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className=" mt-5"
    
      fill
      >
      <Tab className=' ' eventKey="home" title="Home">
      <div className="row home-tab my-5 d-flex justify-content-around ">
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
          <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

        <h6>Data Research</h6>
        <h5>Product Analysis</h5>
        </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        <div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
      </div>
      
      </Tab>
      <Tab className='-all-tab' eventKey=" Development" title=" Development">
      <div className="row home-tab my-5 d-flex justify-content-around">
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
          <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

        <h6>Data Research</h6>
        <h5>Product Analysis</h5>
        </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        



      </div>
      
      </Tab>
       <Tab className='-all-tab' eventKey="plugin" title="plugin">
       <div className="row home-tab my-5 d-flex justify-content-around">
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
          <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

        <h6>Data Research</h6>
        <h5>Product Analysis</h5>
        </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        <div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
      </div>
      
      </Tab>
      <Tab className='-all-tab' eventKey="Design" title="Design">
      <div className="row home-tab my-5 d-flex justify-content-around">
       
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
      </div>
      
      </Tab >
      <Tab className='-all-tab' eventKey="Mobile App" title="Mobile App">
      <div className="row home-tab my-5 d-flex justify-content-around">
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
          <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

        <h6>Data Research</h6>
        <h5>Product Analysis</h5>
        </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        <div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
      </div>
      </Tab>
      <Tab className='-all-tab' eventKey="Branding" title="Branding">
      <div className="row home-tab my-5 d-flex justify-content-around">
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
          <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

        <h6>Data Research</h6>
        <h5>Product Analysis</h5>
        </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Design</h6>
<h5>UI,UX Design</h5>
</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
       
        <div className="content text-center">

<h6>Marketing</h6>
<h5>Content Marketing</h5>
</div></div>
        <div className="col-lg-3 col-md-3  card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink>
        <div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
        <div className="col-lg-3 col-md-3 card">
        <div className="content text-center">

<h6>Development</h6>
<h5>Market System</h5>
</div><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' />
<NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink></div>
        <div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
<div className="col-lg-3 col-md-3 card"><img src="images/gallery/img_01.jpg" alt=""className='img-fluid' /> 
        <NavLink to={''} >
        <div className="icon-con">

        <FaPlus />
        </div>
          </NavLink><div className="content text-center">

<h6>Data Research</h6>
<h5>Product Analysis</h5>
</div></div>
      </div>
      </Tab>
    </Tabs>

      </div>

      {/* query-form----------------------------------- */}

<QueryForm/>

<Footer/>
    </>
   );
}

export default Portfolio;