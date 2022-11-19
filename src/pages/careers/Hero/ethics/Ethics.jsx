import React from 'react';
import './ethics.modules.scss';

export default function Ethics({ icon, title, text }) {
  return (
    <div className="ethics-box">
      <div className="ethics-icon">
        <img src={icon} alt="icon" className="icon" />
      </div>
      <div className="ethics-title">{title}</div>
      <div className="ethics-text">{text}</div>
    </div>
  );
}
