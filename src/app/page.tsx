"use client";
import Pic_one from "../../public/image/Pepsi_blue.png";
import Pic_two from "../../public/image/Pepsi2.png";
import the_back from "../../public/image/The back.png";
import DEW from "../../public/image/DEW.png";
import Tropi from "../../public/image/Tropi.png";
import up from "../../public/image/7up-can.png";

// box image
import pepsi_black from "../../public/image/pepsi_Balck.png";
import pepsi_diet from "../../public/image/Pepsidiet.png";
import Black__ from "../../public/image/black__.png";
import Image from "next/image";
import AOS from "aos";
//  Third section image
import Pep1 from "../../public/image/Pep1.png";
import Pep2 from "../../public/image/pep2.png";
import Pep3 from "../../public/image/pep3.png";
import Pep4 from "../../public/image/pep4.png";

import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const [main_pic, setImage] = useState(the_back);
  const [change_content, setContent] = useState("Pepsi classNameic");
  const [change_p, SetP] = useState(" ");
  // const handleImage = ()=>{
  //   setImage('')
  // }
  const handleChangeContent = () => {
    setContent("The Black addition ");
    SetP(
      "Here are some of the healthy drinks you can try instead of sugar-laced soft drinks or alcoholic beverages:"
    );
    setImage(pepsi_black);
  };
  const handleChangeContent2 = () => {
    setContent("Pepsi diet");
    SetP(
      "Diet Pepsi is a diet carbonated cola soft drink produced by PepsiCo, introduced in 1964 as a variant of Pepsi with no sugar"
    );
    setImage(pepsi_diet);
  };
  const handleChangeContent3 = () => {
    setContent("Pepsi Max");

    SetP(
      "Pepsi Max is a low-calorie, sugar-free cola, marketed by PepsiCo as an alternative to Pepsi and Diet Pepsi, except for Norway, where it is the main Pepsi "
    );
    setImage(Black__);
  };
  const showlastbox = () => {};
  return (
    <>
      <Navbar />
      <section className="Main_Page">
        
        <div className="container">
          <div className="box" data-aos="fade-down-right" id="box2">
            <Image src={Pic_two} alt="Not found" />
          </div>
          <div className="box" data-aos="fade-left" id="box1">
            <Image src={Pic_one} alt="Not Found" />
          </div>
        </div>
      </section>
      {/* second section */}
      <section className="second_section">
        <div>
          <div className="container_2">
            <div className="box_2" id="box_1" data-aos="zoom-in-down">
              {" "}
              <Image src={main_pic} alt="Not found " />
            </div>
            <div className="box_2" id="box_2" data-aos="fade-left">
              <h1>{change_content} </h1>
              <p>{change_p}</p>
            </div>
          </div>
          <div className="pep_image">
            <div
              data-aos="fade-up"
              onClick={handleChangeContent}
              data-aos-duration="3000"
              className="pep_box"
              id="pep_box1"
            >
              {" "}
              <Image src={pepsi_black} alt="Not found" />
            </div>
            <div
              data-aos="fade-up"
              onClick={handleChangeContent2}
              data-aos-duration="3200"
              className="pep_box"
              id="pep_box2"
            >
              <Image src={pepsi_diet} alt="Not found" />
            </div>
            <div
              data-aos="fade-up"
              onClick={handleChangeContent3}
              data-aos-duration="3500"
              className="pep_box"
              id="pep_box3"
            >
              <Image src={Black__} alt="Not found" />
            </div>
          </div>
        </div>
      </section>

      <section id="Third" className="Third">
        <div className="container__3">
          <div
            className="container_box"
            data-aos="zoom-in-right"
            id="container_box1"
          >
            {" "}
            <Image src={Pep1} alt="Not Found" />
            <a href="Pepsi_Nitro">
              <button className="button-33" role="button">
                See More
              </button>
            </a>
          </div>
          <div
            className="container_box"
            data-aos="fade-up"
            data-aos-duration="3000"
            id="container_box2"
          >
            {" "}
            <Image src={Pep2} alt="Not Found" />
            <a href="wild_cherry">
              <button className="button-33" role="button">
                See More
              </button>
            </a>
          </div>
          <div
            className="container_box"
            id="container_box3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            <Image src={Pep3} alt="Not Found" />
            <a href="pepsi_vanila">
              <button className="button-33" role="button">
                See More
              </button>
            </a>
          </div>
          <div
            className="container_box"
            data-aos="zoom-in-left"
            id="container_box4"
          >
            {" "}
            <Image src={Pep4} alt="Not Found" />
            <a href="pepsi_mango/">
              {" "}
              <button className="button-33" role="button">
                See More
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="Last">
        <div className="container__4">
          <div className="wrapper">
            <div className="last_box" id="lastBox1">
              <Image src={DEW} alt="Not found" />
              <div className="Heading">
                <h1>Mountain DEW</h1>
                <p>
                  Mountain Dew, stylized as Mtn Dew in some countries, is a
                  carbonated soft drink brand, produced and owned by PepsiCo
                </p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="last_box" id="lastBox1">
              <Image src={Tropi} alt="Not found" />
              <h1>Tropicana </h1>
              <p>
                Tropicana may not have invented orange juice, but in 1954, we
                found a way to bring fresh-tasting OJ to everyone. And to this
                day,
              </p>
              <div className="btn">
                <a href="#">Read more 1</a>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="last_box" id="lastBox1">
              <Image src={up} alt="Not found" />
              <h1>7-UP </h1>
              <p>
                Tropicana may not have invented orange juice, but in 1954, we
                found a way to bring fresh-tasting OJ to everyone. And to this
                day,
              </p>
              <div className="btn">
                <a href="#">Read more 1</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer  */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>Pepsi</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Blog</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Pepsi © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Headquarters  </span> Purchase, Harrison, New York, United States
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1800 22 4020</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:PepsiCoDMKSG@pepsico.com">PepsiCoDMKSG@pepsico.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            PepsiCo, Inc. is an American multinational food, snack, and beverage
            corporation headquartered in Harrison, New York, in the hamlet of
            Purchase. PepsiCo's business encompasses all aspects of the food and
            beverage market
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
