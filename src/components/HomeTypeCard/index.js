import React, { useState } from 'react';

const HomeTypeCard = () => {
//   const [isChecked, setChecked] = useState(false);

//   const toggleSwitch = () => {
//     setChecked(!isChecked);
//     console.log("isChecked", !isChecked)
//   };

  return (
   <div className='flex flex-row gap-4'>
    <div><img src="/assets/images/icon-sun-light.svg" alt="sun light" /></div>
     <div className="switch-container">
      <label className={`switch ${isChecked ? 'checked' : ''}`}>
        <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <span className="slider"></span>
      </label>
    </div>
    <div><img src="/assets/images/icon-moon-light.svg" alt="sun light" /></div>
   </div>
  );
};

export default HomeTypeCard;