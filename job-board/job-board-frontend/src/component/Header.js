import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import headerImage1 from '../images/jobbg.jpg';
import headerImage2 from '../images/jobbg1.jpg';
import headerImage3 from '../images/jobbg2.jpg';
import headerImage4 from '../images/jobbg3.jpg';


const Header = () => {
  return (
    <Carousel autoPlay infiniteLoop showArrows={true} showStatus={true} showThumbs={false}>
      <div style={{ maxHeight: '400px', overflow: 'hidden', display:'flex', justifyContent:'center', alignItems:'center' }}>
        <img
          src={headerImage1}
          alt="Header 1"
          style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
        />
      </div>
      <div style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <img
          src={headerImage2}
          alt="Header 2"
          style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
        />
      </div>
      <div style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <img
          src={headerImage3}
          alt="Header 3"
          style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
        />
      </div>
      <div style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <img
          src={headerImage4}
          alt="Header 4"
          style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
        />
      </div>
    </Carousel>
  );
};

export default Header;
