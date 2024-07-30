import logo from "../assets/rshd.jpeg";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import {FaMoon} from "react-icons/fa6"
import {FaSun} from "react-icons/fa6"
import {PiCaretDown} from "react-icons/pi"

const Navbar = () => {

  function showLogin() {
	  const doc = document.getElementById('login1');
	  doc.style.display = "flex";
  }

  return (
     <nav className ="mb-20 flex item-center justify-between justify-center navbar">

	<div style={{display: "flex"}}>
		<a href="#" style={{margin: "1.5rem"}}><FaSun/></a>
		<a href="#" onClick={showLogin} style={{margin: "1.3rem"}}>تسجيل الدخول</a>
		<a href="#" onClick={showLogin} style={{margin: "1.3rem"}}>اِنضم اِلينا</a>
	</div>

        <div style={{display: "flex"}}>
          <a href="#" style={{margin: "1.3rem"}}>الاسالة الشائعة</a>
          <a href="#" style={{margin: "1.3rem", display: "flex", gap: "0.5rem"}} className="dropdownlist"><PiCaretDown style={{marginTop: "0.4rem"}}/> الدعم</a>
          <a href="#" style={{margin: "1.3rem"}}>البرامج</a>
          <div style={{margin: "0.5rem", paddingLeft: "2rem", paddingRight: "3rem"}} className="item-center">
              <img style={{width: "4rem"}} className="mx-2 w-10" src={logo} alt="logo" />
          </div>
        </div>
  </nav>
  
  );
};

export default Navbar
