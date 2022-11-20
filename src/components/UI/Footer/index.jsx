import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import footerLogo from './../../../assets/icons/footer-logo.png';
import globe from './../../../assets/icons/globe.png';
import { routes } from '../../../libs/links';

const links1 = [
  { name: "How it Works", link: routes.howItWorks},
  { name: "Use Case", link: routes.useCases},
  { name: "About", link: routes.about},
  { name: "Avatars", link: "/"},
  { name: "Custom Avatars", link: "/"},
  { name: "Explore Background", link: routes.scenery },
  { name: "Blog", link: routes.blog },
]



const links2 = [
  { name: 'Customer Support', link: '/' },
  { name: 'Community', link: routes.community },
  { name: 'Careers', link: routes.careers },
  { name: 'Press', link: routes.press },
  { name: 'FAQ', link: routes.faqs },
  { name: 'Contact Us', link: routes.contact },
  { name: 'APIs', link: routes.api }
];

const links3 = [
  { name: 'Pricing', link: routes.pricing },
  { name: 'Terms of Service', link: routes.termsService },
  { name: 'Terms and Conditions', link: routes.termsCondition },
  { name: 'Privacy Policy', link: routes.privacy }
];

const Footer = () => {
  return (
    <footer className={`${styles.footer} h-full md:py-16  pb-4 md:pb-8 px-3 lg:px-20 w-full`}>
      <div className={`flex flex-col md:flex-row `}>
        <div className="flex mt-20 md:mt-0 h-24 md:basis-3/12">
          <Link to="/">
            {' '}
            <img src={footerLogo} alt="home" />
          </Link>
        </div>

        <div className="grid grid-cols-2  md:flex md:flex-row md:basis-full xl:basis-full md:justify-between">
          <div className="md:basis-3/12">
            {links1.map((link, index) => (
              <Link className="block" key={index} to={link.link}>
                {' '}
                {link.name}{' '}
              </Link>
            ))}
          </div>

          <div className="md:basis-3/12">
            {links2.map((link, index) => (
              <Link className="block" key={index} to={link.link}>
                {' '}
                {link.name}{' '}
              </Link>
            ))}
          </div>

          <div className="basis-full md:basis-3/12">
            {links3.map((link, index) => (
              <Link className="block" key={index} to={link.link}>
                {' '}
                {link.name}{' '}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="md:relative md:flex w-full md:justify-end">
        <div className={`${styles.lang} mt-24 flex items-center px-2`}>
          <button>
            <img src={globe} alt="globe" />
          </button>

          <select>
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
