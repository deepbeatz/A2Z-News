import './Navbar.css';
import logo from '../images/A2Z (1).png';
import insta from '../images/instagram.png';
import fb from '../images/facebook.png';
import ln from '../images/linkedin.png';
import gh from '../images/github.png';
import twitter from '../images/twitter.png';
import search_icon from '../images/search.png';
import React, { useState } from 'react';
// import { useEffect, useRef } from 'react';
function Navbar() {
  const [open, setOpen] = useState(false);
  const [Slide1, setSlide1] = useState(false);
  const [Slide3, setSlide3] = useState(false);
  const [Slide5, setSlide5] = useState(false);
  const [Slide7, setSlide7] = useState(false);
  const [Slide9, setSlide9] = useState(false);
  // let menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       console.log(menuRef.current);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   }
  // });
  return (
    <div className="nav_container">
      <div className="nav_left">
        <a href="/"><img id="logo" src={logo} alt="" /></a>
        <p id="nav_title">A2Z NEWS</p>
      </div>
      <div className="nav_right">
        <a href="/"><div className="home nav_right_item">Home</div></a>
        <a href="/"><div className="about nav_right_item">About</div></a>
        <a href="/"><div className="explore nav_right_item">Explore</div></a>
        <div className="social_links" onClick={() => { setOpen(!open) }}>
          <p id="social-heading-ptag">Socials</p>
          <ul className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
            <li className="Icon_show instagram">
              <a className="atag_socials" href="https://www.instagram.com/rajdeep_editz_original/">
                <img onMouseOver={() => { setSlide1(!Slide1) }} onMouseOut={() => { setSlide1(!Slide1) }} className="icon_all" src={insta} alt="" id="insta" />
              </a>
              <div id="vertical_underline1" className={`slider ${Slide1 ? 'active' : 'inactive'}`}></div>
              <p id="ptag_socials1" className={`slider ${Slide1 ? 'active' : 'inactive'}`}>Instagram</p>
            </li>
            <li className="Icon_show facebook">
              <a className="atag_socials" href="https://www.facebook.com/profile.php?id=100064266127151">
                <img onMouseOver={() => { setSlide3(!Slide3) }} onMouseOut={() => { setSlide3(!Slide3) }} className="icon_all" src={fb} alt="" id="fb" />
              </a>
              <div id="vertical_underline2" className={`slider ${Slide3 ? 'active' : 'inactive'}`}></div>
              <p id="ptag_socials2" className={`slider ${Slide3 ? 'active' : 'inactive'}`}>Facebook</p>
            </li>
            <li className="Icon_show linkedin">
              <a className="atag_socials" href="https://www.linkedin.com/in/rajdeep-chowdhury-3230461b3/">
                <img onMouseOver={() => { setSlide5(!Slide5) }} onMouseOut={() => { setSlide5(!Slide5) }} className="icon_all" src={ln} alt="" id="ln" />
              </a>
              <div id="vertical_underline3" className={`slider ${Slide5 ? 'active' : 'inactive'}`}></div>
              <p id="ptag_socials3" className={`slider ${Slide5 ? 'active' : 'inactive'}`}>LinkedIn</p>
            </li>
            <li className="Icon_show github">
              <a className="atag_socials" href="https://github.com/deepbeatz">
                <img onMouseOver={() => { setSlide7(!Slide7) }} onMouseOut={() => { setSlide7(!Slide7) }} className="icon_all" src={gh} alt="" id="gh" />
              </a>
              <div id="vertical_underline4" className={`slider ${Slide7 ? 'active' : 'inactive'}`}></div>
              <p id="ptag_socials4" className={`slider ${Slide7 ? 'active' : 'inactive'}`}>GitHub</p>
            </li>
            <li className="Icon_show twitter">
              <a className="atag_socials" href="https://twitter.com/rajdeep27232">
                <img onMouseOver={() => { setSlide9(!Slide9) }} onMouseOut={() => { setSlide9(!Slide9) }} className="icon_all" src={twitter} alt="" id="twitter" />
              </a>
              <div id="vertical_underline5" className={`slider ${Slide9 ? 'active' : 'inactive'}`}></div>
              <p id="ptag_socials5" className={`slider ${Slide9 ? 'active' : 'inactive'}`}>Twitter</p>
            </li>
          </ul>
        </div>
        <div className="search">
          <input id="search_input" type='search' placeholder='search news' />
          <img id="search_icon" src={search_icon} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Navbar;