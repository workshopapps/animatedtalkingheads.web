import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import headerLogo from "./../../../assets/icons/header-logo.png";
import menuIcon from "./../../../assets/icons/menu-icon.png";

const links = [
  { name: "Home", link: "/"},
  { name: "About Us", link: "/about"},
  { name: "Use cases", link: "/use-cases"},
  { name: "Contact", link: "/contact"},
  { name: "How it work", link: "/how-it-works"},
]

const TopNavbar = () => {
  return (
    <div className={styles.nav}>
      <div className={`h-full flex justify-between items-center px-3 lg:px-20`}>
        <div className="flex">
          <Link to="/"> <img src={headerLogo} alt="home"/></Link>
        </div>
        <div className={`${styles.links} hidden md:flex justify-between basis-3/5`}>
          { links.map( (link, index) => <Link className="block" key={index} to={link.link}> {link.name} </Link> ) }
        </div>
        <div className={`${styles.create} hidden md:flex`}>
          <Link to="/podcast/upload" className="btn px-10 py-3">
            Create Video
          </Link>
        </div>
        <button className="md:hidden">
          <img src={menuIcon} alt="home"/>
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
