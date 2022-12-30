import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typed = () => {
  return (
    <div id="typed">
      <TypeAnimation
        sequence={[
          'Welcome, I am Javier', // Types 'One'
          1000, // Waits 1s
          'and this is my Portfolio', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Click anywhere :)',
          2900, // Types 'Three' without deleting 'Two'
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: '2.6rem',
          fontFamily: 'Good',
          textShadow: '1px 1px 10px rgba(255,255,255,0.6)',
        }}
      />
    </div>
  );
};

export default Typed;
