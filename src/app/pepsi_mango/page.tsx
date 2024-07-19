'use client'
import React, { useState } from 'react'
import '../../../public/css/Pepsi_Mango.css';
import Navbar from '../components/Navbar';
import Pep from '../../../public/image/Mango_Back.png';
import bottle from '../../../public/image/plastic-bottle.png';
import can from '../../../public/image/beer.png';
import Image from 'next/image';
// const [main_pic, setImage] = useState(Pep);
const The_bottle = ()=>{
  // setImage(can);
}

function page() {
  return (
    <>
    
    <Navbar/>
    <section>
      <div className="container_Mango">
        <div className="box_M" id="box1">
          <h1>Pepsi Mango </h1>
          <p>The Pepsi Mango 12oz can features a refreshing mango flavor. 12 Fluid Ounce Can: Each can contains 12 fluid ounces of mango flavored soda</p>
          <h5>Natural Fact's </h5>
          <div className="con">
            <div className="box-m"><h1>Sugar</h1> <br /><h2>0ML</h2></div>
            <div className="box-m"><h1>caffeine</h1> <br /><h2>0ML</h2></div>
            <div className="box-m"><h1> Flavour</h1> <br /><h2>0ML</h2></div>
            <div className="box-m"><h1>citralacid</h1> <br /><h2>0ML</h2></div>
          </div>
          <div className="icon_box">
          <div className="icons"><Image onClick={The_bottle} src={bottle} alt="Not found "/></div>
          <div className="icons"><Image src={can} alt="Not found "/></div>
          </div>
        </div>
        <div className="box_M" id="box2"><Image src={Pep} alt="Not found "/></div>
      </div>
    </section>
    </>
  )
}

export default page
