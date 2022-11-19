import React from 'react';
import './features.modules.scss';

export default function Features({ title, subTitle, text }) {
  return (
    <div className="features-box">
      <h4 className="features-box-title">{title}</h4>
      <span className="sub-title">{subTitle}</span>
      <p className="text">{text}</p>
    </div>
  );
}
