import React, { useState } from "react";

import css from "./ToggleSwitch.module.css";


const ToggleSwitch = ({ toggledState, onToggle, socialName }) => {
  const [isToggled, setIsToggled] = useState(toggledState);
  const onToggleHandler = (event) => {
    setIsToggled(!isToggled)
    onToggle(event.target.name)

  };

  return (
    <label className={css.toggleswitch}>
      <input name={socialName} type="checkbox" className={css.input} checked={isToggled} onChange={onToggleHandler} />
      <span className={css.switch} />
    </label>
  );
}

export default ToggleSwitch;