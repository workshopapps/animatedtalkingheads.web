import Layout from '../../components/UI/Layout';
// import './css/index.css';
// import tick_circle from './images/tick-circle.png';
import like from './images/like.png';
import people from './images/people.png';
import lamp_charge from './images/lamp-charge.png';
import lovely from './images/lovely.png';
import unlimited from './images/unlimited.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Engineering, Management, Design, Marketing } from './team-data/teamData.js';
import style from './css/about.module.css';
import { Button } from '../../components/UI/Button';
import PageTitle from '../../components/UI/page-title';

const About = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <Layout>
      <PageTitle title="About us" />

      {/* about page wrapper */}
      <div className={style.about}>

        <div>

          <section className={style.aboutSection}>

            <div className='flex flex-col items-center'>

              <div className='max-w-[1532px]'>

                <div className={`${style.aboutContent} mb-20]`}>
                  <h3 className={style.contentHeading}>THE GOAL</h3>
                  <div className={`${style.contentTheme} max-w-[836px] mb-[10px]`}>
                    We are helping newbie podcasters beat the odds and get discovered organically
                  </div>
                  <p>
                    if you've ever hosted a podcast before then you'd surely attest to the fact tht
                    growing a podcast's discoverability organically is hard. And we mean incredibly
                    difficult.
                  </p>
                  <p>
                    When it comes to podcast marketing, your options are limited. the best shot most
                    indie podcasters get at marketing is talking abot their shows whenever they get the
                    chance to.
                  </p>
                  <p>
                    As a result, newbie creators who create great content for their listeners struggle
                    to grow and reach more people.
                  </p>
                  <p>
                    This is why Voxclips was created. We've identified the problem in the marketing
                    strategies of most newbie creators. Instead of creating videos of you talking in a
                    studio for more than an hour, why don't you try something different?
                  </p>
                </div>


                <div className={style.aboutContent}>
                  <h3 className={`${style.contentHeading} mt-[30px] `}>MISSION</h3>
                  <div className={`${style.contentTheme} max-w-[300px] md:max-w-[836px] `}>
                    Voxclips is the product of an ideation-to-implementation project that was created
                    to provide a solution for podcasters who struggle to make any waves doing what
                    they love
                  </div>
                  <p className={style.contentText}>
                    Our mission is to redefine how people interact with podcast titles. We have identified podcasts as
                    a great tool for education, so that is why we have created a platform that enables podcasters
                    to get creative with how they market their titles.
                  </p>
                  <p className={style.contentText}>
                    Our ultimate goal is to get more people listening to amazing podcast titles that
                    they will find educational, informative, and worthwhile.
                  </p>
                  <p className={style.contentText}>
                    We are giving every podcaster a chance to own their marketing game.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={style.aboutMainContent}>
            {/* values section */}
            <div className={style.aboutValues}>

              <div className='flex flex-col items-center'>
                <div className='max-w-[1532px]'>
                  <div className={`flex justify-center`}>
                    <div className={style.aboutValuesHeading}>
                      <h3>VALUES</h3>
                      <div className='flex justify-center'>
                        <p className={style.valuesText}>
                          Our internal and external values as a company are summarised in our CLUTCH acronym; these are our fundamental guiding principles in interacting with our project, and the people who we have provided
                          a solution for
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={style.valuesGridSection}>
                    <div className={style.valuesGrid}>
                      <img src={like} alt="" />
                      <h3>C - Concern</h3>
                      <p>
                        Concern for podcasters and creating innovation to enable more creatives to grow;
                        this drives us to continually improve our product.
                      </p>
                    </div>

                    <div className={style.valuesGrid}>
                      <img src={unlimited} alt="" />
                      <h3>L - Long-term view</h3>
                      <p>
                        We have identified our ultimate goal to be long-term and we are working with
                        creatives on their journey to educate the world a little bit better.
                      </p>
                    </div>

                    <div className={style.valuesGrid}>
                      <img src={people} alt="" />
                      <h3>U - Unity</h3>
                      <p>
                        We prioritise unity internally to ensure that we are always in the right frame
                        to tackle bigger adventures related to our project.
                      </p>
                    </div>

                    <div className={style.valuesGrid}>
                      <img src={people} alt="" />
                      <h3>T - Teamwork</h3>
                      <p>
                        We value teamwork and we continually work as a tight-knit team to deliver even
                        better solutions to the problem we are solving.
                      </p>
                    </div>

                    <div className={style.valuesGrid}>
                      <img src={lamp_charge} alt="" />
                      <h3>C - Creating</h3>
                      <p>
                        Creating a liberal platform that encourages every contributor's feedback and
                        opinion (including our customers) on how to improve our product.
                      </p>
                    </div>

                    <div className={style.valuesGrid}>
                      <img src={lovely} alt="" />
                      <h3>H - Helping</h3>
                      <p>Helping to democratize how people find podcasts on the web.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* values section */}

            {/* story section */}

            <section className={style.aboutSection}>
              <div className='flex flex-col items-center'>
                <div className='max-w-[1532px]'>
                  <div className={`flex justify-center`}>
                    <div className={style.aboutContent}>
                      <h3 className={style.contentHeading}>OUR STORY</h3>
                      <div className={style.contentTheme}>
                        Voxclips was developed by team Clutch—a team of skilled learners who were part of
                        the HNG internship (9th cohort), under the guidance of the renowned technopreneur,
                        Mark Essien.
                      </div>
                      <p className={style.contentText}>
                        The problem that Voxclips is solving is one that we have identified to be an
                        itch-on-the-back problem for creatives with great content who struggle to thrive
                        in the podcast industry.
                      </p>
                      <p className={style.contentText}>
                        We were provided an incubation platform by the HNG organising team where we
                        prioritised learning, and worked together as a team in an agile framework that not
                        only saw us scaling different tasks, but also working to help one another become
                        better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* team section */}

            <section className={style.meetSection}>
              <div className='flex flex-col items-center'>
                <div className='max-w-[1532px]'>
                  <div className={`flex flex-col items-center`}>
                    <div className={style.meetContent}>
                      <h3 className={`style.contentHeading mb-5`}>MEET THE TEAM</h3>
                      <div className={`${style.contentTheme}`}>
                        <p className={`text-white`}>
                          Voxclip was developed by a team of motivated managers, developers, designers and
                          marketers coming together to solve a problem in the creative industry.
                        </p>
                      </div>
                    </div>

                    <div className={style.aboutTeamSection2}>
                      <div className={style.aboutTeamTabs}>
                        <div className={style.aboutTeamTab} tabIndex={0}>
                          <p>Management </p>
                          <div className={style.aboutTeamSlider} id={style.firstSlider}>
                            <Swiper
                              style={{
                                '--swiper-navigation-size': '25px',
                                '--swiper-navigation-color': '#171d2e'
                              }}
                              modules={[Pagination, Navigation]}
                              loopFillGroupWithBlank={true}
                              navigation={true}
                              slidesPerView={4}
                              spaceBetween={1}
                              slidesPerGroup={1}
                              loop={true}>
                              {Management.map((slide) => (
                                <SwiperSlide className={style.aboutTeamSlide} key={slide.name}>
                                  <TeamMember member={slide} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>

                          {/* for small screen */}

                          <div className={style.aboutTeamSlider} id={style.swiperSmallScreen}>
                            <Swiper
                              style={{
                                '--swiper-navigation-size': '25px',
                                '--swiper-navigation-color': '#171d2e'
                              }}
                              modules={[Pagination, Navigation]}
                              loopFillGroupWithBlank={true}
                              navigation={true}
                              slidesPerView={1}
                              spaceBetween={1}
                              slidesPerGroup={1}
                              loop={true}>
                              {[...Management, ...Engineering, ...Design, ...Marketing].map((slide) => (
                                <SwiperSlide className={style.aboutTeamSlide} key={slide.name}>
                                  <TeamMember member={slide} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>

                          {/* for small screen */}

                        </div>

                        <div className={style.aboutTeamTab} tabIndex={1}>
                          <p id={style.secondSlider}>Engineering</p>
                          <div className={style.aboutTeamSlider} id={style.secondSlider}>
                            <Swiper
                              style={{
                                '--swiper-navigation-size': '25px',
                                '--swiper-navigation-color': '#171d2e'
                              }}
                              modules={[Pagination, Navigation]}
                              loopFillGroupWithBlank={true}
                              navigation={true}
                              slidesPerView={4}
                              spaceBetween={40}
                              slidesPerGroup={1}
                              loop={true}>
                              {Engineering.map((slide) => (
                                <SwiperSlide className={style.aboutTeamSlide} key={slide.name}>
                                  <TeamMember member={slide} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>

                        <div className={style.aboutTeamTab} tabIndex={2}>
                          <p id={style.thirdSlider}>Design</p>
                          <div className={style.aboutTeamSlider} id={style.thirdSlider}>
                            <Swiper
                              style={{
                                '--swiper-navigation-size': '25px',
                                '--swiper-navigation-color': '#171d2e'
                              }}
                              modules={[Pagination, Navigation]}
                              loopFillGroupWithBlank={true}
                              navigation={true}
                              slidesPerView={4}
                              spaceBetween={40}
                              slidesPerGroup={1}
                              loop={true}>
                              {Design.map((slide) => (
                                <SwiperSlide className={style.aboutTeamSlide} key={slide.name}>
                                  <TeamMember member={slide} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>

                        <div className={style.aboutTeamTab} tabIndex={3}>
                          <p id={style.fourthSlider}>Marketing</p>
                          <div className={style.aboutTeamSlider} id={style.fourthSlider}>
                            <Swiper
                              style={{
                                '--swiper-navigation-size': '25px',
                                '--swiper-navigation-color': '#171d2e'
                              }}
                              modules={[Pagination, Navigation]}
                              loopFillGroupWithBlank={true}
                              navigation={true}
                              slidesPerView={4}
                              spaceBetween={1}
                              slidesPerGroup={1}
                              loop={true}>
                              {Marketing.map((slide, index) => (
                                <SwiperSlide key={index} className={style.aboutTeamSlide}>
                                  <TeamMember member={slide} />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* team section */}

            {/* build section */}

            <div className={style.aboutBuild}>
              <div className={style.aboutBuildBox}>
                <h3>Try Viral for a Change</h3>
                <p className={'max-w-[500px] w-full text-sm md:text-xl font-thin'}>
                  With Voxclips, you can create brilliant cartoon videos
                  of talking heads that your audience will love. <br />
                  We are committed to giving creators a chance <br />
                  to creatively market their content across multiple streams,
                  create a following from these sources, organically <br />
                  grow and monetize their content.
                </p>
                <Link to="/podcast/upload">
                  <Button>Try for free now</Button>
                </Link>
              </div>
            </div>

            {/* build section */}
          </section>
        </div>
      </div>
      {/* about page wrapper */}
    </Layout>
  );
};

export default About;



const TeamMember = (props) => {
  const member = props.member
  return (
    <>
      <img src={member.image} alt="" />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </>
  )
}