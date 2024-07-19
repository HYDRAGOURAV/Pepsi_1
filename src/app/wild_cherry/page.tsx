'use client'
import React, { useState } from 'react'
import '../../../public/css/Pepsi_Mango.css';
import Navbar from '../components/Navbar';
import Vanilla from '../../../public/image/Vanilla.png';
import bottle from '../../../public/image/plastic-bottle.png';
import cheery from '../../../public/image/Cherry.png';
import can from '../../../public/image/beer.png';
import Image from 'next/image';
function page() {
  return (
    <>
    <Navbar/>
    <section>
      <div className="container_Mango">
        <div className="box_M" id="box1">
          <h1>Pepsi Wild Cherry </h1>
          <p> Pepsi Wild Cherry is a cherry-flavored cola first introduced in 1988 by PepsiCo. Two sugar-free versions 
            are also available, with zero calories, named Diet Pepsi Wild Cherry and Pepsi Zero Sugar Wild Cherry,</p>
          <h5>Natural Fact's </h5>
          <div className="con">
            <div className="box-m"><h1>Sugar</h1> <br /><h2> 41g</h2></div>
            <div className="box-m"><h1>caffeine</h1> <br /><h2>5mg</h2></div>
            <div className="box-m"><h1> Flavour</h1> <br /><h2>Wild Cherry</h2></div>
            <div className="box-m"><h1>citralacid</h1> <br /><h2>24-ounce </h2></div>
          </div>
          <div className="icon_box">
          <div className="icons"><Image  src={bottle} alt="Not found "/></div>
          <div className="icons"><Image src={can} alt="Not found "/></div>
          </div>
        </div>
        <div className="box_M" id="box2"><Image  src={cheery} alt="Not found "/></div>
      </div>
    </section>
    </>
  )
}

export default page
