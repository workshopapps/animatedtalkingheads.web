import React from 'react';
import './index.scss';

function Card(props) {
  return (
    <div className="card">
      <img src={props.photo} alt="" className="card__img" />
      <h2 className="card-heading">{props.heading}</h2>
      <p>{props.text}</p>
      <div className="blog__thumbnail">
        <div className="image__container">
          <img src={props.avatar} alt="avatar" />
        </div>
        <h3>Nowso Emmanuel</h3>
        <span> 20 Nov 2022</span>
      </div>
    </div>
  );
}

export default Card;
