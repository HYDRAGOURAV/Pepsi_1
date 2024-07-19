import React from 'react'
import '../../../public/css/Navbar.css';
import Image from 'next/image';
import Logo from "../../../public/image/Logo-removebg-preview.png";
function Navbar() {
  return (
    <>
         <header>
        <nav>
          <div className="logo">
            <Image src={Logo} alt="Not found " />
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#Third">collection</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
