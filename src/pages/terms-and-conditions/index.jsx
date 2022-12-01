import Layout from '../../components/UI/Layout';

const termsContent = [
  {
    id: 1,
    contentTitle: `1 Agreement to terms`,

    content: (
      <p>
        <p className="inline">
          Welcome to Voxclips! These terms and conditions outline the rules and regulations for the
          use of Mechanic Team Clutch HNG9 Website, located at
        </p>
        <a href="https://voxclips.hng.tech" className="text-pri-700 px-1">
          https://voxclips.hng.tech
        </a>
        by accessing this Website, we assume you accept these terms and conditions. Do not continue
        to use Voxclips if you do not agree to take all of the terms and conditions stated on this
        page.
      </p>
    )
  },
  {
    id: 2,
    contentTitle: `2. Terminology`,

    content: `The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person who logs on to this website and is compliant with the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party","Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary toundertake the process of our assistance to the Client in the most appropriate manner forthe express purpose of meeting the Client’s needs in respect of the provision of theCompany’s stated services, in accordance with and subject to, prevailing laws. Any use of the above terminology or other words in the singular, plural, capitalizationand/or he/she or they, are taken as interchangeable and therefore as referring to it.`
  },
  {
    id: 3,
    contentTitle: `3. Property Rights`,

    content: (
      <p>
        All content, product information, software, documentation and/or materials posted onVoxclips
        or made available through it by us ("Materials") are the property of MechanicTeam Clutch
        HNG9 or its licensors, which retains all rights, titles and interests in and tosuch
        Materials and all intellectual property rights relating thereto, including
        withoutlimitations all copyright, patent, trademarks, logos, design rights and any
        otherproprietary rights.
        <br />
        <br />
        <p>
          Specifications for products and services are subject to change, and we reserve the rightto
          make changes without prior notice,
        </p>
        <br />
        Other than as specifically set forth herein, no transfer or grant of any rights is made or
        isto be implied by any provision of these Terms. You agree not to infringe upon all theabove
        rights
      </p>
    )
  },
  {
    id: 4,
    contentTitle: `4. License`,

    content: (
      <p>
        Unless otherwise stated, Mechanic Team Clutch HNG9 and/or its licensors own theintellectual
        property rights for all material on Voxclips. All intellectual property rights are reserved.
        You may access this from Voxclips for yourown personal use subject to restrictions set in
        these terms and conditions.
        <br />
        <br />
        You must not:
        <br />
        <br />
        <ul className="pl-4">
          <li className="list-disc ">Republish material from Voxclips.</li>
          <li className="list-disc">Sell, rent or sub-license material from Voxclips.</li>
          <li className="list-disc">Reproduce, duplicate or copy material from Voxclips.</li>
          <li className="list-disc">Redistribute content from Voxclips.</li>
        </ul>
        <br />
        This Agreement shall begin on the date hereof. Parts of this website offer an opportunity
        for users to post and exchange opinions and information in certain areas of the website.
        <br />
        <br />
        Mechanic Team Clutch HNG9 does not filter, edit, publish or review Comments prior to their
        presence on the website.
        <br />
        <br />
        Comments do not reflect the views and opinions of Mechanic Team Clutch HNG9. Comments
        reflect the views and opinions of the person who posts their views and opinions.
        <br />
        <br />
        To the extent permitted by applicable laws, Mechanic Team Clutch shall not be liable for the
        Comments or for any liability, damages or expenses caused and suffered becauseof any use of
        or posting of appearance of the Comments on this website.
        <br />
        <br />
        Mechanic Team Clutch HNG9 reserves the right to monitor all Comments and toremove any
        Comments, which can be considered inappropriate, offensive or causes abreach of these Terms
        and Conditions.
        <br />
        <br />
        You warrant and represent that:
        <br />
        <br />
        <ul className="pl-4">
          <li className="list-disc">
            You are entitled to post Comments on our website and have all necessary licenses and
            consents to do so.
          </li>
          <li className="list-disc">
            The Comments do not invade any intellectual property rights, including without
            limitation copyright, patent or trademark of any third party.
          </li>
          <li className="list-disc">
            {' '}
            The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise
            unlawful material which is an invasion of privacy.
          </li>
          <li className="list-disc">
            {' '}
            The Comments will not be used to solicit or promote business, custom or
            presentcommercial activities or unlawful activity.
          </li>
        </ul>
        <br />
        You hereby grant Mechanic Team Clutch HNG9 a non-exclusive license to use,reproduce, edit
        and authorize others to use, reproduce and edit any of your Commentsin all forms, formats or
        media.
      </p>
    )
  },
  {
    id: 5,
    contentTitle: `5. Cookies`,

    content: (
      <p>
        We employ the use of cookies. By accessing Voxclips, you agreed to use cookies inagreement
        with Mechanic Team Clutch's Privacy Policy.
        <br />
        <br />
        Most interactive websites use cookies to let us retrieve the user’s details for each
        visit.Our website uses cookies to enable the functionality of certain areas to make it
        easierfor people visiting our website. Some of our affiliate/advertising partners may also
        use cookies.
      </p>
    )
  },
  {
    id: 6,
    contentTitle: `6. Copyright Infringements`,

    content: (
      <p>
        Mechanic Team Clutch HNG9 is committed to protecting the rights of copyright holdersand
        seeks to comply with all applicable laws and regulations regarding the protection of
        intellectual property.
        <br />
        <br />
        Unauthorized copying, distribution, modification, public display or public performance
        ofcopyrighted works is a copyright infringement, and Mechanic team clutch HNG9 willundertake
        appropriate steps against copyright offenders.
      </p>
    )
  },
  {
    id: 7,
    contentTitle: `7. Hyperlinking to our Content`,

    content: (
      <p>
        The following organizations may link to our Website without prior written approval:
        <br />
        <br />
        <ul className="pl-4">
          <li className="list-disc"> Government agencies</li>
          <li className="list-disc"> Search engines</li>
          <li className="list-disc">News organizations</li>
          <li className="list-disc">
            Online directory distributors may link to our Website in the same manner as they
            hyperlink to the Websites of other listed businesses, and{' '}
          </li>
          <li className="list-disc">
            System-wide Accredited Businesses except soliciting non-profit organizations,charity
            shopping malls, and charity fundraising groups which may not hyperlink to our Website.
          </li>
        </ul>
        <br />
        These organizations may link to our homepage, to publications or to other Website
        information so long as the link:
        <br />
        (a) Is not in any way deceptive,
        <br />
        (b) Does not falsely imply sponsorship, endorsement or approval of the linking party andits
        products and/or services;
        <br />
        (c) Fits within the context of the linking party’s site.
        <br />
        <br />
        We may consider and approve other link requests from the following types of organizations:
        <br />
        <br />
        <ul className="pl-4">
          <li className="list-disc">
            commonly-known consumer and/or business information sources;
          </li>
          <li className="list-disc"> associations or other groups representing charities;</li>
          <li className="list-disc">online directory distributors;</li>
          <li className="list-disc">internet portals;</li>
          <li className="list-disc"> accounting, law and consulting firms; and</li>
          <li className="list-disc"> educational institutions and trade associations.</li>
        </ul>
        <br />
        We will approve link requests from these organizations if we decide that:
        <br />
        <br />
        (a) The link would not make us look unfavorably to ourselves or to our accreditedbusinesses;
        <br />
        (b) The organization does not have any negative records with us;
        <br />
        (c) The benefit to us from the visibility of the hyperlink compensates for the absence of
        Mechanic Team Clutch HNG9;
        <br />
        (d) The link is in the context of general resource information.
        <br />
        <br />
        These organizations may link to our home page so long as the link:
        <br />
        <br />
        (a) is not in any way deceptive;
        <br />
        (b) does not falsely imply sponsorship, endorsement or approval of the linking party andits
        products or services;
        <br />
        (c) fits within the context of the linking party’s site.
        <br />
        <br />
        If you are one of the organizations listed in paragraph 2 above and are interested in
        linking to our website, you must inform us by sending an e-mail to Mechanic TeamClutch HNG9.
        <br />
        <br />
        Please include your name, your organization name, and contact information as well asthe URL
        of your site, a list of any URLs from which you intend to link to our Website,and a list of
        the URLs on our site to which you would like to link. Wait 1-2 weeks for a response.
        <br />
        <br />
        Approved organizations may hyperlink to our website as follows:
        <br />
        <br />
        <ul className="pl-4">
          <li className="list-disc">By use of our corporate name; or</li>
          <li className="list-disc">By use of the uniform resource locator being linked to; or</li>
          <li className="list-disc">
            By use of any other description of our Website, being linked to that makes sense within
            the context and format of content on the linking party’s site.
          </li>
        </ul>
        <br />
        <br />
        No use of Mechanic Team Clutch's logo or other artwork will be allowed for linking absent a
        trademark license agreement.
      </p>
    )
  },
  {
    id: 8,
    contentTitle: `8. iFrames`,

    content: `Without prior approval and written permission, you may not create frames around ourWebpages that alter in any way the visual presentation or appearance of our Website`
  },
  {
    id: 9,
    contentTitle: `9. Content Liability`,

    content: `We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. 
No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or otherviolation of, any third-party rights.`
  },
  {
    id: 10,
    contentTitle: `10. Privacy Policy`,

    content: (
      <p>
        To learn about how we use, collect and protect your personal information, please read our{' '}
        <a href="https://voxclips.hng.tech/privacy-policy" className="text-pri-700 px-1">
          Privacy Policy
        </a>
      </p>
    )
  },
  {
    id: 11,
    contentTitle: `11. Reservation of rights`,

    content: (
      <p>
        We reserve the right to request that you remove all links or any particular link to our
        Website. You approve removing all links to our Website upon request immediately.
        <br />
        <br />
        We also reserve the right to amend these terms and conditions and it’s linking policy at any
        time. By continuously linking to our Website, you agree to be bound to and follow
        theselinking terms and conditions.
      </p>
    )
  },
  {
    id: 12,
    contentTitle: `12. Removal of Links from our Website`,

    content: (
      <p>
        If you find any link on our Website that is offensive for any reason, you are free to
        contact and inform us at any moment. We will consider requests to remove links but we are
        not obligated to or so or to respond to you directly.
        <br />
        <br />
        We do not ensure that the information on this website is correct, we do not warrant its
        completeness or accuracy; nor do we promise to ensure that the website remains available or
        that the material on the website is kept up to date.
      </p>
    )
  },
  {
    id: 13,
    contentTitle: `13. Disclaimer`,

    content: (
      <p>
        Our content is provided "as is" and "as available" basis without warranties of any kind
        either expressed or implied.
        <br />
        <br />
        Fully permissible pursuant to applicable law, mechanic team clutch hng9 disclaims
        allwarranties, expressed or implied, including, but not limited to, implied warranties
        ofmerchantability, infringement and fitness for a particular purpose.
        <br />
        <br />
        We do not warrant that any content displayed or otherwise available through voxclips will be
        accurate, complete, reliable, current, uninterrupted or error-free, or that voxclipsis free
        of viruses or other harmful components.
      </p>
    )
  },
  {
    id: 14,
    contentTitle: `14. Change to Terms`,

    content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.`
  },
  {
    id: 15,
    contentTitle: `15. Contact`,

    content: (
      <p className="">
        If you have any questions about these Terms, please contact us through our{' '}
        <a href="https://voxclips.hng.tech/contact" className="text-pri-700">
          Contact Page
        </a>
      </p>
    )
  }
];

const Build = (props) => {
  const { content, contentTitle } = props.termsCon;

  return (
    <div>
      <h2 className="font-bold md:leading-10 md:text-[28] text-2xl text-[#292d32] mb-4 ">
        {contentTitle}
      </h2>
      <p className="text-base leading-10 font-medium md:text-xl pb-12 text-[#292d32]  ">
        {content}
      </p>
    </div>
  );
};

const TermsAndCondition = () => {
  return (
    <Layout>
      <section className="bg-pri-700 w-full grid justify-center items-center h-[135px] md:h-[216px] ">
        <h1 className="font-bold text-2xl md:text-5xl text-[#f4f4f4] ">Terms and Conditions</h1>
      </section>
      <section className="bg-[#fbfbfb] px-6 pt-7 md:pt-14 md:px-56">
        <h3 className="font-medium italic text-[#292d32] text-base text-xl mb-8 md:mb-10 ">
          Published on November 16th, 2022
        </h3>
        <h2 className="uppercase text-base md:text-2xl text-[#292d32] mb-12 md:mb-16 font-bold ">
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE PLATFORM
        </h2>
        {termsContent.map((terms) => {
          return <Build key={terms.id} termsCon={terms} />;
        })}
      </section>
    </Layout>
  );
};

export default TermsAndCondition;
