import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const logo = require('../images/logo.png');

const socialMedia = [
  {
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/narendrawadhwa',
  },
  {
    icon: <GitHubIcon />,
    link: 'https://github.com/narendrawadhwa',
  },
  {
    icon: <InstagramIcon />,
    link: 'https://www.instagram.com/_narennn._/',
  },
  {
    icon: <EmailIcon />,
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
          alignItems: 'flex-start',
          minHeight: isMobile ? '200px' : '150px', 
          bgcolor: palette.secondary.darkBlue,
          padding: isMobile ? '20px 12px' : '20px 50px', 
          color:'white',
          boxShadow:'0px -3px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Left Side */}
          <Box sx={{
          display:'flex',
          flexDirection:  'column', 
          margin:'10px',
          maxWidth:'300px'
         }} 
          style={{ color: 'white' }}>
            <img src={logo} style={{maxWidth: isMobile ? '160px' : '200px'}}/>
            <div style ={{padding:'10px 0px', display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <div style={{ width: '1px', height: 'auto', backgroundColor: 'white' , margin: '0 8px 0 0' }}></div>

<p style={{fontSize:'12px', }}>
I'm a passionate full-stack developer, committed to creating 
innovative web solutions.
</p>
            </div>
           
          </Box>

        {/* Middle Side */}
        <Box
          sx={{
            display: 'flex',
            alignItems:'flex-start',
            flexDirection:'column',
            margin:'10px'
          }}
        >
           <h5 style={{margin:'0 0 8px 0',  fontSize:'15px'}}>

            Quick Links
          </h5>
     <p className='link' style={{fontSize: '15px', padding:'3px 0px' }}> <a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}} /><span className='link-text'> Login</span></a></p> 
     <p className='link' style={{fontSize: '15px',padding:'3px 0px'  }}> <a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}}/><span className='link-text'> Sign up</span></a></p>
     <p className='link' style={{fontSize: '15px', padding:'3px 0px'  }}><a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}}/><span className='link-text'> Dashboard</span></a> </p> 
          </Box>

   {/* Middle Side 2 */}
   <Box
          sx={{
            display: 'flex',
            alignItems:'flex-start',
            flexDirection:'column',
            margin:'10px'
          }}
        >
          <h5 style={{margin:'0 0 8px 0',  fontSize:'15px'}}>
            My Other Projects
          </h5>
     <p className='link' style={{fontSize: '15px', padding:'3px 0px' }}> <a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}} /><span className='link-text'> Portfolio App</span></a></p> 
     <p className='link' style={{fontSize: '15px',padding:'3px 0px'  }}> <a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}}/><span className='link-text'> Tribute Page</span></a></p>
     <p className='link' style={{fontSize: '15px', padding:'3px 0px'  }}><a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}}/><span className='link-text'> Booking Show</span></a> </p> 
     <p className='link' style={{fontSize: '15px', padding:'3px 0px'  }}><a href='' style={{textDecoration:'none', color:'white'}} target='_blank'><ArrowForwardIosIcon style={{fontSize:'12px'}}/><span className='link-text'> Eshop Frontend</span></a> </p> 
          </Box>




        {/* Right Side */}
        <Box
          sx={{
            display: 'flex',
flexDirection:'column',
margin:'10px'

          }}
        >
      
            <div>
        <h5 style={{margin:'0 0 8px 0', fontSize:'15px'}}>
            Social Links
          </h5>
        </div>
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
                width: '38px',
                height: '38px',
                marginRight:'10px',
                marginBottom:'10px',
                borderRadius:'50%',
                border: '2px solid #fff',
                transition: 'transform 0.3s ease-in',
                '&:hover': {
                  transform: 'scale(1.15)',
                },
                color:'white'
              }}
            >
              {socialMedia.icon}
            </IconButton>
          ))}
        </Box>
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
