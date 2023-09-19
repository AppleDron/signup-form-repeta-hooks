import React, { useState } from 'react';

const Colorpicker = ({ options }) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  //   const makeOptionClassName = index => {
  //     return index === activeOptionIdx ? styles.activeOption : styles.options;
  //   };

  return (
    <div className="Colorpicker">
      <h2 className="Colorpicker__title">Color Picker</h2>
      <p> Color is: {options[activeOptionIdx].label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          return (
            <button
              className={this.makeOptionClasses(index)}
              key={label}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Colorpicker;
