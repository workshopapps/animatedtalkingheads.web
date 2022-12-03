import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import footerLogo from './../../../assets/icons/footer_logo.svg';
import settings from './../../../assets/icons/settings.svg';
import globe from './../../../assets/icons/white_globe.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
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
      <div className="grid grid-cols-2  lg:grid-cols-5 gap-y-5 gap-x-5 lg:gap-x-0 py-10 w-[90%] mx-auto max-w-[1440px]">
        <div className=" mb-10 lg:mb-0 flex flex-col justify-between">
          <Link to="/">
            <img src={footerLogo} alt="home" />
          </Link>
          <div className="hidden lg:block">
            <Link to="/settings">
              <div className="flex gap-3 ">
                <img src={settings} alt="settings" />
                <p>Settings</p>
              </div>
            </Link>
          </div>{' '}
        </div>
        <div className="lg:hidden col-start-2">
          <Link to="/settings">
            <div className="flex gap-3 ">
              <img src={settings} alt="settings" />
              <p>Settings</p>
            </div>
          </Link>
        </div>
        <div className="col-start-1 lg:col-start-2 grid gap-3 lg:gap-5 text-white">
          {links1.map((link, index) => (
            <Link className="" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
          <div className="lg:hidden">
            <Link to={routes.about}>About</Link>
          </div>
          <div className="lg:hidden">
            <Link to={routes.faqs}>FAQs</Link>
          </div>
        </div>

        <div className="hidden lg:grid gap-3 col-start-1 lg:col-start-3 lg:gap-5 ">
          {links2.map((link, index) => (
            <Link className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className=" grid gap-3 lg:gap-5  row-start-2 lg:row-start-1 col-start-2 lg:col-start-4 ">
          <div className="lg:hidden">
            <Link to={routes.pricing}>Pricing</Link>
          </div>

          {links3.map((link, index) => (
            <Link className="block" key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
          <div className="lg:hidden">{''}</div>
        </div>
        <div className="grid gap-3 lg:gap-5 col-start-1 lg:col-start-5 mt-10 lg:mt-0 ">
          <p className="text-base">Connect With Us</p>
          <div className="flex gap-5 items-center">
            <a href="https://www.facebook.com/Hnginternship/">
              <FaFacebookF size="20" />
            </a>
            <a href="https://twitter.com/hnginternship">
              <FaTwitter size="20" />
            </a>
            <a href="https://www.instagram.com/hnginternship/">
              <FaInstagram size="20" />
            </a>
          </div>
          <div className={`${styles.lang} hidden lg:flex items-center gap-1 `}>
            <button>
              <img src={globe} alt="globe" data-tip data-for="register" />
            </button>
            <ReactTooltip id="register" place="bottom" effect="solid" >
              Select a language
            </ReactTooltip>

            <select className="">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
        <div className={`${styles.lang} lg:hidden flex items-center gap-1 `}>
          <button>
            <img src={globe} alt="globe" />
          </button>

          <select className="">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
