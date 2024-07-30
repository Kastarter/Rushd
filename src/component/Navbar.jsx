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


  return (
     <nav className ="mb-20 flex item-center justify-between justify-center navbar">

	<div style={{display: "flex"}}>
		<a href="#" className="hamburger-menu" style={{margin: "1.5rem"}}><GiHamburgerMenu/></a>
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
          <div style={{margin: "0.5rem", paddingLeft: "2rem", paddingRight: "3rem"}} className="item-center">
              <img style={{width: "4rem"}} className="mx-2 w-10" src={logo} alt="logo" />
          </div>
        </div>
  </nav>
  
  );
};

export default Navbar
