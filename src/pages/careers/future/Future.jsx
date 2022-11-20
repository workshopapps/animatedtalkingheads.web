import React from 'react';
import Features from './features/Features';
import './future.module.scss';

export default function Future() {
  return (
    <section className="careers__future">
      <h3 className="careers__secondary-heading">Get to know your future team</h3>
      <div className="careers__future-features">
        <Features
          title="Engineering"
          subTitle="Front and back end developers"
          text="Our Engineers  use their creativity and technical skills to help solve new and ongoing problems."
        />
        <Features
          title="Product Management"
          subTitle="Coordinators"
          text="Oversees, develop and help improve our company products. You’d need excellent managment skills and strong technical background."
        />
        <Features
          title="Product Design"
          subTitle="UIUX designers"
          text="Creatively translate customer needs into viable products. Improve design for existing products and identify opportunities for new products."
        />
        <Features
          title="Mobile Development"
          subTitle="Technical team"
          text="We are looking for qualified mobile developers to help build and maintain high quality application."
        />
        <Features
          title="Marketing"
          subTitle="Sales department"
          text="Contribute in the implementation of product marketing strategies by identifying opportunities for promotion and business growth."
        />
      </div>
    </section>
  );
}
