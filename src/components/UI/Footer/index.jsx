import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import footerLogo from "./../../../assets/icons/footer-logo.png";

const links1 = [
  { name: "How it Works", link: "/"},
  { name: "Use Case", link: "/about"},
  { name: "About", link: "/about"},
  { name: "Use cases", link: "/use-cases"},
  { name: "Contact", link: "/contact"},
  { name: "How it work", link: "/how-it-works"},
]

const links2 = [
  { name: "How it Works", link: "/"},
  { name: "About Us", link: "/about"},
  { name: "Use cases", link: "/use-cases"},
  { name: "Contact", link: "/contact"},
  { name: "How it work", link: "/how-it-works"},
]

const links3 = [
  { name: "Home", link: "/"},
  { name: "About Us", link: "/about"},
  { name: "Use cases", link: "/use-cases"},
  { name: "Contact", link: "/contact"},
  { name: "How it work", link: "/how-it-works"},
]

const Footer = () => {
  return (
    <footer className={`${styles.footer} `}>
      
      <div className={`h-full flex py-16 px-3 lg:px-20`}>

        <div className="flex basis-3/12">
          <Link to="/"> <img src={footerLogo} alt="home"/></Link>
        </div>

        <div className="flex basis-9/12 justify-between">

          <div className="basis-3/12">
            { links1.map( (link, index) => <Link className="block" key={index} to={link.link}> {link.name} </Link> ) }
          </div>

          <div className="basis-3/12">
            { links2.map( (link, index) => <Link className="block" key={index} to={link.link}> {link.name} </Link> ) }
          </div>

          <div className="basis-3/12">
            { links3.map( (link, index) => <Link className="block" key={index} to={link.link}> {link.name} </Link> ) }
          </div>

        </div>

      </div>
    
    </footer>
  );
};

export default Footer;
