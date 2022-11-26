import Layout from '../../components/UI/Layout';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { routes } from '../../libs/links';
import { scroller, Element } from 'react-scroll';

const TermsOfService = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
  };

  return (
    <Layout>
      <div className={styles.tosContainer}>
        {/* header section for terms of service */}
        <header className={styles.tosHeader}>
          <h1 className={styles.headerHeading}>Terms of Service</h1>
          <p className={styles.headerP}>Effective as of November 16, 2022.</p>
          <div className={styles.overlay}></div>
        </header>

        {/* content section for terms of service */}
        <section className={styles.contentSection}>
          {/* sideNav for content*/}
          <div className={styles.contentNav}>
            <ul>
              <li onClick={() => scrollToElement('Introduction')}>Introduction</li>
              <li onClick={() => scrollToElement('Services')}>Services</li>
              <li onClick={() => scrollToElement('Licences')}>Licences</li>
              <li onClick={() => scrollToElement('Companys-Intellectual-Property')}>
                Company's Intellectual Property
              </li>
              <li onClick={() => scrollToElement('Users-Intellectual-Property')}>
                User's Intellectual Property
              </li>
              <li onClick={() => scrollToElement('General-Conditions')}>General Conditions</li>
              <li onClick={() => scrollToElement('Product-or-Services')}>Product or Services</li>
              <li onClick={() => scrollToElement('Personal-Information')}>Personal Information</li>
              <li onClick={() => scrollToElement('Errors-Inaccuracies-and-Ommissions')}>
                Errors, Inaccuracies and Ommissions
              </li>
              <li onClick={() => scrollToElement('Disclaimer')}>Disclaimer</li>
              <li onClick={() => scrollToElement('Contact-Information')}>Contact Information</li>
            </ul>
          </div>
          {/* Content Body */}
          <div className={styles.contentBody}>
            <Element className={styles.contentBodyUnit} name="Introduction">
              <h2 className={styles.contentHeading}>Introduction</h2>
              <p className={styles.contentP}>
                This website is operated by Team clutch. Throughout the site, the terms “we”, “us”
                and “our” refer to Voxclips. Voxclips offers this website, including all
                information, tools and Services available from this site to you, the user,
                conditioned upon your acceptance of all terms, conditions, policies and notices
                stated here. By visiting our site and/ or obtaining something from us, you engage in
                our “Service” and agree to be bound by the following terms and conditions (“Terms of
                Service”, “Terms”), including those additional terms and conditions and policies
                referenced herein and/or available by hyperlink. These Terms of Service apply to all
                users of the site, including without limitation users who are browsers, podcasters,
                brands storytellers and/ or contributors of content. Please read these Terms of
                Service carefully before accessing or using our website. By accessing or using any
                part of the site, you agree to be bound by these Terms of Service. If you do not
                agree to all the terms and conditions of this agreement, then you may not access the
                website or use any Services. If these Terms of Service are considered an offer,
                acceptance is expressly limited to these Terms of Service. Any new features or tools
                which are added to the current website shall also be subject to the Terms of
                Service. You can review the most current version of the Terms of Service at any time
                on this page. We reserve the right to update, change or replace any part of these
                Terms of Service by posting updates and/or changes to our website. It is your
                responsibility to check this page periodically for changes. Your continued use of or
                access to the website following the posting of any changes constitutes acceptance of
                those changes.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Services">
              <h2>Services</h2>
              <p>
                As long as you have opted to use any of the services and products provided by
                Voxclips, you have agreed to these Terms of Service, subject to the terms and
                conditions of this Agreement. From time to time, Team clutch may change, modify, or
                upgrade the functionality or appearance of Voxclips, which may include the removal
                of functionality, content, or integrations. Voxclips may be down at certain points
                for maintenance and upgrades which will be communicated in due course to you. We may
                also, in the future, offer new Services and/or features through the website
                (including, the release of new tools and resources). Such new features and/or
                Services shall also be subject to these Terms of Service.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Licences">
              <h2>Licences</h2>
              <p>
                Subject to the terms and conditions of this Agreement, the Company the grants User a
                non-transferable, non-assignable, limited, non-exclusive, revocable license to use
                Voxclips only as permitted in this Agreement. The password and login information
                that is assigned to the User must be kept confidential, may only be used by the User
                personally, and may not be shared, given, rented, or assigned to any other persons.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Companys-Intellectual-Property">
              <h2>Company's Intellectual Property</h2>
              <p>
                Voxclips is the property of Team clutch and contains information and data which is
                protected by copyright, trademark, trade secret, and other such intellectual
                property laws. The user agrees to abide by all copyright notices and trademark
                restrictions.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Users-Intellectual-Property">
              <h2>User's Intellectual Property</h2>
              <p>
                The user retains all intellectual property rights, including copyrights, over the
                user's content posted to Social Media Platforms using Voxiclips (“User Content”).
                You grant Company a non-exclusive, non-transferable (except as stated in this
                Agreement), worldwide, limited license to access, use, reproduce, electronically
                distribute, transmit, perform, format, display, store, archive, and index User
                Content for your use of Voxclips and Voxclip’s integration with the Social Media
                Platforms.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="General-Conditions">
              <h2>General Conditions</h2>
              <p>
                We reserve the right to refuse service to anyone for any reason at any time. You
                agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the
                Service, use of the Service, or access to the Service or any contact on the website
                through which the service is provided, without express wrote permission by us. The
                headings used in this agreement are included for convenience only and will not limit
                or otherwise affect these Terms.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Product-or-Services">
              <h2>Product or Services</h2>
              <p>
                Certain products or Services may be available exclusively online through the
                website. We have made every effort to display as accurately as possible the features
                of our products that appear on the site. We reserve the right to limit the
                quantities of any products or Services that we offer. All descriptions of products
                or features are subject to change at any time without notice, at our sole discretion
                of us. We reserve the right to discontinue any product at any time. Any offer for
                any product or service made on this site is void where prohibited.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Personal-Information">
              <h2>Personal Information</h2>
              <p>
                Your submission of personal information through the store is governed by our{' '}
                <Link to={routes.privacy}>
                  <span style={{ color: '#2563eb' }}>Privacy Policy</span>
                </Link>
                .
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Errors-Inaccuracies-and-Ommissions">
              <h2>Errors, Inaccuracies and Ommissions</h2>
              <p>
                Occasionally there may be information on our site or in the Service that contains
                typographical errors, inaccuracies or omissions that may relate to product
                descriptions, promotions, offers, and product availability. We reserve the right to
                correct any errors, inaccuracies or omissions, and to change or update information
                if any information in the Service or on any related website is inaccurate at any
                time without prior notice.
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Disclaimer">
              <h2>Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations,
                warranties and conditions relating to our website and the use of this website.
                Nothing in this disclaimer will:
                <div className={styles.disclaimerList}>
                  <ul>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>
                      limit or exclude our or your liability for fraud or fraudulent
                      misrepresentation;
                    </li>
                    <li>
                      limit any of our or your liabilities in any way that is not permitted under
                      applicable law; or exclude any of our or your liabilities that may not be
                      excluded under applicable law
                    </li>
                  </ul>
                </div>
              </p>
            </Element>
            <Element className={styles.contentBodyUnit} name="Contact-Information">
              <h2>Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at the{' '}
                <Link to={routes.contact}>
                  <span style={{ color: '#2563eb' }}>contact page</span>
                </Link>
              </p>
            </Element>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TermsOfService;
