import { FiGithub,FiLinkedin, FiInstagram} from 'react-icons/fi';
import { HiOutlineMail } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer id ="footer">
            <div data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="50" className = 'lt-content-column copyright' >
            <img src="./static/roll.gif" alt="roll gif" style={{width: "256px"}}/>
            <br/>
            <div className="button-container">
                <a target="_blank"rel="noopener noreferrer" href="https://github.com/austinluu"><button><FiGithub /></button></a>
                <a target="_blank"rel="noopener noreferrer" href="https://www.linkedin.com/in/austin-luu/"><button><FiLinkedin/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="https://www.instagram.com/austintoasteh/"><button><FiInstagram/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="mailto:austinowenluu@gmail.com"><button><HiOutlineMail/></button></a>
                <a target="_blank"rel="noopener noreferrer" href="./static/Austin_Luu_Resume_2021_C_V1.pdf"><button><IoNewspaperOutline/></button></a>
            </div>
            Designed and <a href="https://github.com/AustinLuu/austinluu.me" rel="noopener noreferrer" target="_blank" style={{fontWeight: "600", textDecoration:"none"}}>developed</a> with ☕️ &amp; ❤️ by Austin Luu © 2021.
            </div>
        </footer>
    )
}

export default Footer
