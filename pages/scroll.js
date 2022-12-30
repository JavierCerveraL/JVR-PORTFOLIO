import React from 'react';
import { Link } from 'react-scroll';
import Typed from './typed';

const { useState, useEffect } = React;

function Scroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <Link
      to="home"
      href={'#home'}
      spy={true}
      smooth={true}
      offset={10}
      duration={1500}
    >
      <div
        className="bg-picture h-screen three_bg  text-stone-900  "
        id="container"
      >
        <div className="h-screen  text-stone-900  " id="height"></div>
        {isVisible && (
          <div
            id="hide"
            className="text-stone-100 text-6xl md:text-5xl lg:text-3xl "
          >
            <Typed className="typed-js" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default Scroll;
