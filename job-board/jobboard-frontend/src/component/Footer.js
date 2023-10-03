import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const profileImg = require('../images/profile-img.png');
const linkedIn = require('../images/linkedin-icon.png');
const gfg = require('../images/gfg.jpg');
const instagram = require('../images/insta-icon.png');
const hackerRank = require('../images/hackerrank.png');
const gitHub = require('../images/github-icon.png');
const mail = require('../images/mail-icon.png');

const socialMedia = [
  {
    logo: linkedIn,
    link: 'https://www.linkedin.com/in/narendrawadhwa',
  },
  {
    logo: gitHub,
    link: 'https://github.com/narendrawadhwa',
  },
  {
    logo: instagram,
    link: 'https://www.instagram.com/_narennn._/',
  },
  {
    logo: hackerRank,
    link: 'https://www.hackerrank.com/narencreation101',
  },
  {
    logo: gfg,
    link: 'https://auth.geeksforgeeks.org/user/narendrawadhwa',
  },
  {
    logo: mail,
    link: 'mailto:narendrawadhwa06@gmail.com',
  },
];

const Footer = () => {
  const { palette } = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display:'flex',
          flexDirection: isMobile ? 'column' : 'row', 
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          height: isMobile ? '125px' : '70px', 
          bgcolor: palette.secondary.darkBlue,
          padding: isMobile ? '15px 10px' : '0 50px', 
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginRight:'13px', 
              marginBottom: isMobile ? '10px' : '0', // Adjust margin for mobile
            }}
          >
            <img
              src={profileImg}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '2px solid white',
                filter: 'brightness(1.15)',
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box style={{ color: 'white' }}>
            <p style={{ margin: 0, fontSize: '11px', marginBottom: '0px' }}>Crafted By:</p>
            <p style={{ margin: 0, fontSize: '17px', marginTop: '0px' }}>Narendra Wadhwa</p>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {socialMedia.map((socialMedia, index) => (
            <IconButton
              key={index}
              component="a"
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: '35px',
                height: '35px',
                marginRight:'10px',
                padding: 0,
                transition: 'transform 0.3s ease-in',
                '&:hover': {
                  transform: 'scale(1.15)',
                },
              }}
            >
              <img
                src={socialMedia.logo}
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            </IconButton>
          ))}
        </Box>
      </Box>
      <Box
  sx={{
    height: '35px',
    bgcolor: palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: isMobile ? '12px' : 'inherit', // Set font size to 12px for mobile
  }}
>
  <p style={{ margin: 0, color: 'white' }}>
    Created by Narendra Wadhwa. All rights reserved © 2023
  </p>
</Box>

    </>
  );
};

export default Footer;
