import Layout from '../../components/UI/Layout';
import './css/index.css';
import tick_circle from './images/tick-circle.png'
import like from './images/like.png'
import people from './images/people.png'
import lamp_charge from './images/lamp-charge.png'
import lovely from './images/lovely.png'
import unlimited from './images/unlimited.png'
import { Link } from 'react-router-dom';
const About = () => {
  return <Layout>

    {/* about page wrapper */}
    <div className="about">
      <div className="about_child">


        {/* hero section */}
        <div className="about_hero">

          <div className="about_hero_image">

          </div>

          <div className="about_hero_text">
            <h3>About Us</h3>
          </div>

          <div className="about_main_content">
            {/* mission */}
            <div className="about_mission">

              <div className="about_mission_section1">

                <h3>OUR MISSION</h3>
                <p>Voxclips is the product of an ideation-to-implementation project that was created to provide a solution for podcasters who struggle to make any waves doing what they love</p>
              </div>



              <div className="about_mission_section2">

                <div className="mission_grid">

                  <div className="mission_grid_box">
                    <p>Our mission is to redefine how Nigerians interact with podcast titles. We have identified podcasts as a great tool for education, so that is why we have created a platform that enables podcasters to get creative with how they market their titles.</p></div>

                  <div className="mission_grid_box">
                    <p>Our ultimate goal is to get more people listening to amazing podcast titles that they will find educational, informative, and worthwhile.</p></div>

                  <div className="mission_grid_box">
                    <p>We are giving every podcaster a chance to own their marketing game.</p>

                  </div>

                </div>

                <div className="mission_grid">
                  <div className="mission_grid_box">
                    <img src={tick_circle} alt="" />
                    <p>Audio to animated video</p>
                  </div>

                  <div className="mission_grid_box">
                    <img src={tick_circle} alt="" />
                    <p>Variety of characters available</p>
                  </div>

                  <div className="mission_grid_box">
                    <img src={tick_circle} alt="" />
                    <p>Variety of scenes available</p>
                  </div>

                  <div className="mission_grid_box">
                    <img src={tick_circle} alt="" />
                    <p>Sync video and audio</p>
                  </div>


                </div>

              </div>

            </div>
            {/* mission */}


            {/* values section */}
            <div className="about_values">

              <div className="about_values_heading">
                <h3>OUR VALUES</h3>
                <h2>Voxclips users should have podcasting superpowers</h2>
                <p>Our internal and external values as a company are summarised in our CLUTCH acronym; these are our fundamental guiding principles in interacting with our project, and the people who we have provided a solution for.</p>
              </div>

              <div className="values_grid_section">

                <div className="values_grid">
                  <img src={like} alt="" />
                  <h3>C - Concern</h3>
                  <p>Concern for podcasters and creating innovation to enable more creatives to grow; this drives us to continually improve our product.</p>
                </div>

                <div className="values_grid">
                  <img src={unlimited} alt="" />
                  <h3>L – Long-term view</h3>
                  <p>We have identified our ultimate goal to be long-term and we are working with creatives on their journey to educate the world a little bit better.</p>
                </div>

                <div className="values_grid">
                  <img src={people} alt="" />
                  <h3>U – Unity</h3>
                  <p>We prioritise unity internally to ensure that we are always in the right frame to tackle bigger adventures related to our project.</p>
                </div>

                <div className="values_grid">
                  <img src={people} alt="" />
                  <h3>T – Teamwork</h3>
                  <p>We value teamwork and we continually work as a tight-knit team to deliver even better solutions to the problem we are solving.</p>
                </div>


                <div className="values_grid">
                  <img src={lamp_charge} alt="" />
                  <h3>C – Creating</h3>
                  <p>Creating a liberal platform that encourages every contributor's feedback and opinion (including our customers) on how to improve our product.</p>
                </div>

                <div className="values_grid">
                  <img src={lovely} alt="" />
                  <h3>H – Helping</h3>
                  <p>Helping to democratize how people find podcasts on the web.</p>
                </div>

              </div>

            </div>
            {/* values section */}



            {/* story section */}

            <div className="about_story">
              <div className="about_story_section">

                <div className="story_grid">
                  <h3>OUR STORY</h3>
                  <p>Voxclips was developed by team Clutch—a team of skilled learners who were part of the HNG internship (9th cohort), under the guidance of the renowned technopreneur, Mark Essien.</p>
                </div>

                <div className="story_grid">
                  <h5>The problem that Voxclips is solving is one that we have identified to be an itch-on-the-back problem for creatives with great content who struggle to thrive in the podcast industry.</h5>
                  <h5> We were provided an incubation platform by the HNG organising team where we prioritised learning, and worked together as a team in an agile framework that not only saw us scaling different tasks, but also working to help one another become better.</h5>

                </div>

              </div>
            </div>

            {/* story section */}


            {/* team section */}

            <div className="about_team">

              <div className="about_team_section1">

                <div className="team_grid">
                  <h3>MEET THE TEAM</h3>
                  <p>Working at Voxclip means surrounding yourself with smart passionate people, striving to build the best podcasting tool in the world.</p>
                </div>
                <div className="team_grid">
                  <h5>At Voxclip we value trust, teamwork, and bringing engament and visibilty to help podcasters create visual content out of their audio recordings.</h5>
                </div>

              </div>

            </div>

            {/* team section */}



            {/* build section */}

            <div className="about_build">
              <div className="about_build_box">
                <h3>Let’s build the future of podcasting <br /> together</h3>
                <Link><button>Try for free now</button></Link>
              </div>
            </div>

            {/* build section */}

          </div>






        </div>
        {/* hero section */}









      </div>
    </div>
    {/* about page wrapper */}

  </Layout>;
};

export default About;
