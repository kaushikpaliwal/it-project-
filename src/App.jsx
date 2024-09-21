
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import PricingPage from './component/PricingPage'
import About from './component/About'
import Service from './component/Service'
import ServiceDetails from './component/ServiceDetails'
import Team from './component/Team'
import TeamDetails from './component/TeamDetails'
import Faq from './component/Faq'
import SignUp from './component/SignUp'
import Signin from './component/Signin'
import Testimonials from './component/Testimonials'
import Portfolio from './component/Portfolio'
import PortfolioDetails from './component/PortfolioDetails'
import Blog from './component/Blog'
import Error from './component/Error'
import BlogDetail from './component/BlogDetail'
import Contact from './component/Contact'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path={'/servicedetails'} element={<ServiceDetails/>}/>
     <Route path={'/team'} element={<Team/>}/>
    <Route path={'/teamdetails'} element={<TeamDetails/>}/>
    
    <Route path={'/faq'} element={<Faq/>}/>
    <Route path={'/testimonials'} element={<Testimonials/>}/>
    <Route path={'/portfolio'} element={<Portfolio/>}/>
    <Route path={'/portfoliodetails'} element={<PortfolioDetails/>}/>
    <Route path={'/blog'} element={<Blog/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path={'/blogdetails'} element={<BlogDetail/>}/>  
    <Route path={'/contact'} element={<Contact/>}/>
    
    <Route path={'/pricing'} element={<PricingPage/>}/> 
    <Route path={'/signup'} element={<SignUp/>}/>
    <Route path={'/signin'} element={<Signin/>}/> 
     </Routes>
    </>
  )
}

export default App
