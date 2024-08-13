import logo from "../assets/kiranakulaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex felx-shrink-0 items-cneter">
            <img className="mx-8 w-10" src={logo} alt="logo"></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="inkedin.com/in/kiran-dharma-naidu-akula-420238222/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/kiran-akula" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://x.com/Kiran351999" target="_blank" rel="noopener noreferrer">
                 <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/naidu__akula__/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    </nav>
  )
};

export default Navbar;