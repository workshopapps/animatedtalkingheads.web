import React from 'react';
import './meet.modules.scss';
import meetTeam from '../Images/meet-the-team.png';

export default function Meet() {
  return (
    <section className="meet-team">
      <div className="careers__meet-team">
        <div className="careers__meet-team-text">
          <div className="careers__secondary-heading">Meet our amazing team of experts</div>
          <div className="careers__meet-info">
            <p className="info">
              We are a group of young creative imaginative individual collectively striving for
              excellence.
            </p>
            <p className="info">
              We put in collective effort as a team to build ourselves while contributing to the
              growth of the company.
            </p>
            <p className="info">Join a team and inspire the work.</p>
          </div>
        </div>
        <div className="careers__meet-image">
          <img src={meetTeam} alt="" className="meet-image" />
        </div>
      </div>
    </section>
  );
}
