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

const NavbarHamburger = () => {

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

  function toggleHamburger() {
  }

  return (
     <nav id="hmnv" className ="hamburger-nav">
	
	<ul>
	  <li>
	        <div style={{marginTop: "1.5rem", alignSelf: "center", scale: "1.5"}} className="item-center">
	            <img style={{width: "4rem"}} className="mx-2 w-10" src={logo} alt="logo" />
	        </div>
	  </li>
	  <li>
          <a href="#" className="hamburger-links" style={{margin: "1.3rem"}}>البرامج</a>
	  </li>
	  <li>
          <a href="#" className="hamburger-links" style={{margin: "1.3rem"}}>الورشة التدريبية</a>
	  </li>
	  <li>
          <a href="#" className="hamburger-links" style={{margin: "1.3rem"}}>الاسئلة الشائعة</a>
	  </li>
	  <li>
	  <a href="#" className="hamburger-links" onClick={showLogin}>اِنضم اِلينا</a>
	  </li>
	  <li>
	    <a href="#" className="hamburger-links" onClick={showLogin}>تسجيل الدخول</a>
	  </li>
	  <li>
	  <a href="#" className="hamburger-links"><FaSun/></a>
	  </li>
	</ul>
     </nav>
  
  );
};

export default NavbarHamburger
