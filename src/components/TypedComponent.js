import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  // Create a reference to store the DOM element
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["SYSTEM ", "NETWORK ", "SECURITY ","DEVOPS ","CLOUD "],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    // Initialize Typed.js
    const typed = new Typed(el.current, options);

    // Cleanup function to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span> I am </span><br/><span ref={el}></span><span>ENGINEER</span>
    </div>
  );
};

export default TypedComponent;
