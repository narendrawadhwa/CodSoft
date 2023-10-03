import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import headerImage1 from '../images/jobbg.jpg';
import headerImage2 from '../images/jobbg1.jpg';
import headerImage3 from '../images/jobbg2.jpg';
import headerImage4 from '../images/jobbg3.jpg';
import SearchInputEl from './SearchInputEl';
import { useMediaQuery } from '@mui/material';


const Header = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div style={{ position: 'relative' }}>
      <Carousel autoPlay infiniteLoop showArrows={true} showStatus={true} showThumbs={false}>
      <div style={{ maxHeight: isSmallScreen ? '170px' : '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={headerImage1}
            alt="Header 1"
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ maxHeight: isSmallScreen ? '170px' : '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={headerImage2}
            alt="Header 2"
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ maxHeight: isSmallScreen ? '170px' : '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={headerImage3}
            alt="Header 3"
            style={{ width: '100%',  objectFit: 'cover' }}
          />
        </div>
        <div style={{ maxHeight: isSmallScreen ? '170px' : '400px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={headerImage4}
            alt="Header 4"
            style={{ width: '100%',  objectFit: 'cover' }}
          />
        </div>

      </Carousel>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          width: '100%', 
          textAlign: 'center', 
        }}
      >      
          <SearchInputEl />
        </div>  
    </div>
  );
};

export default Header;
