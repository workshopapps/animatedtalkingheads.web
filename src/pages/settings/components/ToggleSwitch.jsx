import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ toggledState }) => {
  const [isToggled, setIsToggled] = useState(toggledState);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default ToggleSwitch;