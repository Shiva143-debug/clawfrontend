

import React from 'react';
import '../App.css'; 

const ImageContainer = () => {
  return (
    <div className="image-section">
      <h2 className="i-heading">Welcome to Shopping Application</h2>
      <p className="i-para">Supabase or MongoDB allows only Registration without restarting the supabase. so kindly check the credentials for Admin and User.</p>
      <h5 style={{color:"white"}}>Admin: Username <span>venky@gmail.com</span> Password <span>12345678</span></h5>
      <h5 style={{color:"white"}}>User: Username <span>shivarama99666@gmail.com</span> Password <span>12345678</span></h5>
      <hr/>
      <h5 style={{color:"white"}}>For payment gateway use credit_card No <span>4242424242424242</span> and give some dummy data. date should be future date.</h5>
      
    
      <div style={{display:"flex",paddingTop:"20px"}}>
      <img src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1722424991/Screenshot_2024-07-31_165244_bewubg.png" alt="m-image" style={{width:"100px",marginRight:"10px"}}/>
      <p className="i-para">Use this webApplication for Purchase the products.</p>
      </div>
    </div>
  );
};

export default ImageContainer;
