import logo from "../assets/Ka.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
     <nav className ="mb-20 flex item-center justify-between py-6">
         <div className="item-center m-8 flex-shrink-0">
             <img className="mx-2 w-10" src={logo} alt="logo" />
         </div>
    
    <div className="m-8 flex item-center justify-center gap-4  text-2xl">
        <a><FaLinkedin /></a>
        <a><FaGithub /></a>
       <a href="google.com"> <FaInstagram /> </a>
        <a><FaSquareXTwitter /></a>
    </div>
  </nav>
  
  );
};

export default Navbar