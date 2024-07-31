import logo from "../assets/rshd.jpeg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {FaMoon} from "react-icons/fa6";
import {FaSun} from "react-icons/fa6";
import {PiCaretDown} from "react-icons/pi";
import {Dropdown} from "./Dropdown";
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {

  let open = false;
  function showLogin() {
	  const doc = document.getElementById('login1');
	  doc.style.display = "flex";
  }

  function toggleDropDown() {
	  const dd = document.getElementById('dropdown');
	  if (dd.style.display == "none") {
	      dd.style.display = "flex";
	  } else {
	      dd.style.display = "none";
	  }
  }


  function toggleHamburgerMenu() {
	  const stripes = document.getElementsByClassName('stripes');
	  const nav = document.getElementById('hmnv');
	  const img = document.getElementById('navimg');
	  const original_nav = document.getElementById('nv');
	  const root = document.getElementById('body');

	  if (!open) {
		  stripes[0].style.transform = "rotate(30deg)";
		  stripes[1].style.transform = "translateX(20px)";
		  stripes[1].style.opacity = "0";
		  stripes[2].style.transform = "rotate(-30deg)";

		  nav.style.transform = "translateX(0)";
		  img.style.transform = "translateX(100%)";
		  root.style.overflow = "hidden";
	  } else {
		  stripes[0].style.transform = "rotate(0)";
		  stripes[1].style.opacity = "1";
		  stripes[1].style.transform = "translateX(0)";
		  stripes[2].style.transform = "rotate(0)";

		  nav.style.transform = "translateX(-100%)";
		  img.style.transform = "translateX(0)";
		  root.style.overflow = "unset";
	  }
	  open = !open;
  }
  return (
     <nav id='nv' className ="mb-20 flex item-center justify-between justify-center navbar">

	<div style={{display: "flex"}}>
		<a href="#" className="hamburger-button" onClick={toggleHamburgerMenu} style={{margin: "1.5rem"}}><div className="stripes"/> <div className="stripes"/> <div className="stripes"/></a>
		<a href="#" className="links" style={{margin: "1.5rem"}}><FaSun/></a>
		<a href="#" className="links" onClick={showLogin} style={{margin: "1.3rem"}}>تسجيل الدخول</a>
		<a href="#" className="links" onClick={showLogin} style={{margin: "1.3rem"}}>اِنضم اِلينا</a>
	</div>

        <div style={{display: "flex"}}>
          <a href="#" className="links" style={{margin: "1.3rem"}}>الاسالة الشائعة</a>
          <a href="#" className="links dropdownlist" onClick={toggleDropDown}>
	    <PiCaretDown style={{marginTop: "0.4rem"}}/> الدعم
	    <Dropdown>
	      <li style={{borderBottom: "outset", borderBottomColor: "floralwhite"}}><a href="#">قروبات</a></li>
	      <li style={{borderBottom: "outset", borderBottomColor: "floralwhite"}}><a href="#">ملفات</a></li>
	    </Dropdown>
	  </a>
          <a href="#" className="links" style={{margin: "1.3rem"}}>البرامج</a>
          <div id="navimg" className="item-center navimg">
              <img style={{width: "4rem"}} className="mx-2 w-10" src={logo} alt="logo" />
          </div>
        </div>
  </nav>
  
  );
};

export default Navbar
