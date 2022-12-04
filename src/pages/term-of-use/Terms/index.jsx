import Layout from '../../../components/UI/Layout';
import styles from '../Terms/styles.module.css';
import { Link } from 'react-router-dom';
import Box from '../../term-of-use/Box';
import { Text } from '../../../components/UI/Text';
//import { Text } from '../../components/UI/Text';
// import { routes } from '../../libs/links';
// import { scroller, Element } from 'react-scroll';

const Policy = () => {
    // const scrollToElement = (element) => {
    //     scroller.scrollTo(element, {
    //         duration: 1500,
    //         delay: 100,
    //         smooth: true,
    //         offset: -150
    //     });
    // };


    return (
        <Layout>
            <section className="bg-sec w-full grid justify-center items-center h-[135px] md:h-[216px] mb-20">
                <h1 className="font-bold text-2xl md:text-5xl text-[#f4f4f4] ">Terms of Use</h1>
            </section>

            <section>
                <div className={styles.nav}>

                    <div className={styles.term}>
                        <li>
                            <Link to="/terms-of-use/term" activeClassName="active">
                                Terms and Conditions
                            </Link>
                        </li>


                    </div>

                    <div className={styles.term_te}>
                        <Link to="/terms-of-use/policy">
                            Privacy Policy
                        </Link>


                    </div>
                </div>

                <div className="p-[16px] lg:pt-[24px] lg:px-[96px] bg-white rounded-md rounded-br-none rounded-bl-none">
                    <Text className={'!text-base  lg:!text-xl !font-normal mb-7'}>
                        Updated on November 16th, 2022
                    </Text>
                    <Text className={'!text-base lg:!text-xl !font-normal mb-[15px] '}>
                        The following terminologies applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                        "Client", "You" and "Your" refers to you, the person who logs on to this website and is compliant with the Company’s terms and conditions.
                        "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party","Parties", or "Us", refers to both the Client and ourselves.
                        All terms refer to the offer, acceptance and consideration of payment necessary to under take the process of our assistance to the Client in
                        the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of theCompany’s stated services,
                        in accordance with and subject to, prevailing laws. Any use of the above terminology or other words in the singular, plural, capitalization and/or
                        he/she or they, are taken as interchangeable and therefore as referring to it.
                    </Text>

                </div>

                <div className="bg-[#fbfbfb]">

                    <div className="px-3 lg:px-20 ">
                        <Box
                            question={'Agreement to terms'}
                            answer={
                                (<p>
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
                                </p>)

                            }
                        />

                        <Box
                            question={'Property Rights'}
                            answer={
                                (<p>
                                    All content, product information, software, documentation and/or materials posted onVoxclips or made available through it by us ("Materials") are the property of MechanicTeam Clutch HNG9 or its licensors, which retains all rights, titles and interests in and tosuch Materials and all intellectual property rights relating thereto, including withoutlimitations all copyright, patent, trademarks, logos, design rights and any otherproprietary rights.
                                    <br></br>
                                    <br></br>
                                    Specifications for products and services are subject to change, and we reserve the rightto make changes without prior notice,<br></br>
                                    <br></br>
                                    Other than as specifically set forth herein, no transfer or grant of any rights is made or isto be implied by any provision of these Terms. You agree not to infringe upon all theabove rights
                                </p>)
                            }
                        />
                        <Box
                            question={'Copyright Infringement'}
                            answer={
                                (<p>
                                    Mechanic Team Clutch HNG9 is committed to protecting the rights of copyright holdersand seeks to comply with all applicable laws and regulations regarding the protection of intellectual property.
                                    <br></br>
                                    <br></br>
                                    Unauthorized copying, distribution, modification, public display or public performance ofcopyrighted works is a copyright infringement, and Mechanic team clutch HNG9 willundertake appropriate steps against copyright offenders.
                                </p>)
                            }
                        />
                        <Box
                            question={'Hyperlinking to our content'}
                            answer={
                                (<p>
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
                                    trademark license agreement. </p>
                                )
                            }
                        />
                        <Box
                            question={'Reservation of rights'}
                            answer={
                                (<p>
                                    We reserve the right to request that you remove all links or any particular link to our Website.
                                    <br></br><br></br>
                                    You approve removing all links to our Website upon request immediately. We alsoreserve the right to amend these terms and conditions and it’s linking policy at any time.
                                    <br></br><br></br>
                                    By continuously linking to our Website, you agree to be bound to and follow theselinking terms and conditions.
                                </p>)
                            }
                        />
                        <Box
                            question={'Disclaimer'}
                            answer={
                                (<p>
                                    Our content is provided "as is" and "as available" basis without warranties of any kind either expressed or implied.
                                    <br></br><br></br>
                                    Fully permissible pursuant to applicable law, mechanic team clutch hng9 disclaims allwarranties, expressed or implied, including, but not limited to, implied warranties ofmerchantability, infringement and fitness for a particular purpose.   <br></br><br></br>
                                    We do not warrant that any content displayed or otherwise available through voxclips will be accurate, complete, reliable, current, uninterrupted or error-free, or that voxclipsis free of viruses or other harmful components.
                                </p>)
                            }
                        />
                        <Box
                            question={'Change to terms'}
                            answer={
                                (<p>
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                                </p>)
                            }
                        />
                        <Box
                            question={'Contact Information'}
                            answer={
                                (<p>
                                    If you have any questions about these Terms, please contact us through our{' '}
                                    <a href="https://voxclips.hng.tech/contact" className="text-pri-700">
                                        Contact Page
                                    </a>
                                </p>)
                            }
                        />

                    </div>


                </div>
            </section>
        </Layout >
    );
};

export default Policy
