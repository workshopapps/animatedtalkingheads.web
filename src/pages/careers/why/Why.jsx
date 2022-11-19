import React from 'react';

export default function Why() {
  return (
    <div>
      <section className="why">
        <h3 className="careers__secondary_heading">Why you should join our team</h3>
        <ol className="reasons">
          <li className="reason">
            <div className="title">Health and Well-being Benefits</div>
            <div className="text">
              We always ensure our employeess have health Insurance and other benefits such as gym
              membership.
            </div>
          </li>
          <li className="reason">
            <div className="title">Paid Vacation</div>
            <div className="text">
              our Employees get the chance to have an all expense paid vacation yearly.
            </div>
          </li>
          <li className="reason">
            <div className="title">Competitive Salary</div>
            <div className="text">
              Employees are offered competitive salaries and bonuses as incentive.
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
}
