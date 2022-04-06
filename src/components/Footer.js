import './LandingPage.css'
import logo from "../assets/logo.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-left">
            <img src={logo} alt="" className="footer-logo"/>
        </div>
        <div className="socials">
            <img src={instagram} alt="" className="social-icon"/>
            <img src={facebook} alt="" className="social-icon"/>
            <img src={twitter} alt="" className="social-icon"/>
        </div>
    </div>
  );
};

export default Footer;
