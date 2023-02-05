import React from 'react'

const Price = () => {
  return (
    <div style={{width:"98%",margin:"10px",background:"#ffffff",height:"40vh",marginTop:"10px",padding:"20px"}}>
    <h2 style={{textAlign:"center"}}>Price</h2>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <div className='pricecontainer' >
    
        <div style={{height:"20%",borderTopRightRadius:"30px",borderTopLeftRadius:"30px",color:"black",fontSize:"24px",textAlign:"center",padding:"7px",borderBottom: "1px solid #EBECF0"}}>
        <img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} />
        <span>Office Space</span>
        </div>
    <div style={{fontSize:"22px",marginTop:"3vh",marginLeft:"35%"}}>Carpet Area:<br/>
    <b>&nbsp; 546 Sq.ft.</b></div>
    <div><button style={{background:"rgb(22, 26, 45)",color:"white",width:"40%",marginTop:"5vh",marginLeft:"30%",height:"40px"}}>Check Price</button></div>
        
    </div>
    <div className='pricecontainer'>
    <div  className='pricetop' >
    <img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} />
    <span>RETAIL SPACE</span>
    </div>
    <div style={{fontSize:"22px",marginTop:"3vh",marginLeft:"35%"}}>Carpet Area:<br/>
    <b>&nbsp; 354 Sq.ft.</b></div>
    <div><button style={{background:"rgb(22, 26, 45)",color:"white",width:"40%",marginTop:"5vh",marginLeft:"30%",height:"40px"}}>Check Price</button></div>
    </div>
    <div className='pricecontainer'>
    <div style={{height:"20%",borderTopRightRadius:"30px",borderTopLeftRadius:"30px",color:"black",fontSize:"24px",textAlign:"center",padding:"7px",borderBottom: "1px solid #EBECF0"}}>
    <img src="https://i.imgur.com/bzTJjUa.png" style={{height:"40px",width:"40px"}} />
    <span>Cube</span>
    </div>
    <div style={{fontSize:"22px",marginTop:"3vh",marginLeft:"35%"}}>Carpet Area:<br/>
    <b>&nbsp; 546 Sq.ft.</b></div>
    <div><button style={{background:"rgb(22, 26, 45)",color:"white",width:"40%",marginTop:"5vh",marginLeft:"30%",height:"40px"}}>Check Price</button></div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Price