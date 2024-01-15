import React, { useState } from 'react';

const Switch = () => {
  const [isChecked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!isChecked);
    console.log("isChecked", !isChecked)
  };

  return (
    <div className="switch-container">
      <label className={`switch ${isChecked ? 'checked' : ''}`}>
        <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
