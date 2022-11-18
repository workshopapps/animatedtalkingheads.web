import { Link } from "react-router-dom";
import { Button } from '../Button';
import styles from "./styles.module.css";
import headerLogo from "./../../../assets/icons/header-logo.png";
import menuIcon from "./../../../assets/icons/menu-icon.png";
import { links } from "../../../libs/links";

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
        <div className={`hidden md:flex`}>
          <Link to="/podcast/upload">
            <Button label={"Create Video"}>Create Video</Button>
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
