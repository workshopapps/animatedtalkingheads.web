import React, { useState } from "react";
import css from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ toggledState }) => {
  const [isToggled, setIsToggled] = useState(toggledState);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className={css.toggleswitch}>
      <input type="checkbox" className={css.input} checked={isToggled} onChange={onToggle} />
      <span className={css.switch} />
    </label>
  );
}

export default ToggleSwitch;