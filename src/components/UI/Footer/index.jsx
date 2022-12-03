import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import footerLogo from './../../../assets/icons/footer_logo.svg';
import globe from './../../../assets/icons/white_globe.svg';
import twitter from './../../../assets/icons/twitter.svg';
import facebook from './../../../assets/icons/facebook.svg';
import { routes } from '../../../libs/links';
import ReactTooltip from "react-tooltip";

const links1 = [
  { name: 'How it Works', link: routes.howItWorks },
  { name: 'Use Cases', link: `${routes.useCases}/1` },
  // { name: 'About', link: routes.about },
  { name: 'Avatars', link: routes.avatars }

  // { name: 'Custom Avatars', link: '/explore-avatar' },

  // { name: 'Explore Background', link: routes.scenery }
  // { name: 'Blog', link: routes.blog }
];

const links2 = [
  // { name: 'Customer Support', link: routes.helperCenter },
  // { name: 'Community', link: routes.community },
  // { name: 'Careers', link: routes.careers },
  // { name: 'Press', link: routes.press },
  { name: 'About', link: routes.about },
  { name: 'FAQ', link: routes.faqs },
  { name: 'Pricing', link: routes.pricing }
  // { name: 'Contact Us', link: routes.contact },
  // { name: 'APIs', link: routes.api }
];

const links3 = [

  { name: 'Pricing', link: routes.pricing },
  { name: 'Terms of Use', link: routes.termsUse },
  { name: 'Terms of Service', link: routes.termsService },

  { name: 'Terms of Service', link: routes.termsService },
  { name: 'APIs', link: routes.api },
  { name: 'Contact Us', link: routes.contact }

  // { name: 'Pricing', link: routes.pricing },

  // { name: 'Terms and Conditions', link: routes.termsCondition },
  // { name: 'Privacy Policy', link: routes.privacy }
];

const Footer = () => {
  return (
    <footer className="bg-sec-600 text-white text-base ">
      <div className="grid grid-cols-2  lg:grid-cols-5 gap-y-5 py-10 w-[90%] mx-auto max-w-[1440px]">
        <div className=" mb-10 lg:mb-0">
          <Link to="/">
            <img src={footerLogo} alt="home" />
          </Link>
        </div>

        <div className="col-start-1 lg:col-start-2 grid gap-3 text-white">
          {links1.map((link, index) => (
            <Link className="" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className=" grid gap-3 col-start-1 lg:col-start-3  ">
          {links2.map((link, index) => (
            <Link className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className=" grid gap-3 row-start-2 lg:row-start-1 col-start-2 lg:col-start-4 ">
          {links3.map((link, index) => (
            <Link className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="grid gap-3 col-start-1 lg:col-start-5 mt-10 lg:mt-0 ">
          <div className={`${styles.lang}  flex items-center gap-1 `}>
            <button data-tip data-for="language">
              <img src={globe} alt="globe" />
            </button>

            <ReactTooltip id="language" place="top" effect="solid" >
              Select preferred language
            </ReactTooltip>

            <select className="">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          <p className="text-base">Connect With Us</p>
          <div className="flex gap-3 items-center">
            <a to="https://www.facebook.com/Hnginternship/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com/hnginternship">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
