import React from 'react';
import Overview from './Overview';
import Price from './Price';
import Sitefloorplan from './Sitefloorplan';
import Gallery from './Gallery';
import Location from './Location';
import Virtualsite from './Virtualsite';
import About from './About';
import Banner from './Banner';
import Footer from './footer';
const Body = () => {
  return (
    <>
    <div style={{display:"flex",width:"100%",Height:"100%"}}>
    <div  className='main'>
        <Banner/>
        <Overview />
     <Price />
        <Sitefloorplan />
        <Gallery />
        <Location />
        <Virtualsite />
        <About />
        <Footer />
        </div>
    <div style={{width:"20.5%",background:"#ffffff",float:"Right",height:"100vh",position:"fixed",right:"0",marginTop:"10px"}} className='sidebar'>
    <div style={{fontSize:"20px",fontWeight:"700"}}>Pre-Register Here For Best Offers</div>
        <div style={{margin:"10px"}}><input placeholder='Name' style={{width:"100%",height:"60px",borderRadius:"5px",padding:"10px"}}/></div>
        <div style={{margin:"10px"}}><input placeholder='Mobile No.' style={{width:"100%",height:"60px",borderRadius:"5px",padding:"10px"}}/></div>
        <div style={{margin:"10px"}}><input placeholder='E-mail' style={{width:"100%",height:"60px",borderRadius:"5px",padding:"10px"}}/></div>
        <div style={{margin:"10px"}}><button style={{background:"#161a2d",color:"white",height:"60px",width:"300px",borderRadius:"5px",fontFamily:"muli, Helvetica, Arial, sans-serif"}}>Pre Register Now</button></div>
    </div>
    </div>

    </>
    
  )
}

export default Body