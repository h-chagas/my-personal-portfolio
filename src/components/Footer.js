import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="mailto:hugochagasuk@gmail.com">
                <MailIcon />
            </a>
            <a href="https://github.com/h-chagas">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/hugo-chagas/">
                <LinkedInIcon />
            </a>
            <a href="https://wa.me/447450599950">
                <WhatsAppIcon />
            </a>
            <a href="https://www.instagram.com/iamhugochagas/">
                <InstagramIcon />
            </a>
            
        </div>
        <p> &copy; 2023 - All rights reserved </p>
        <p>Designed and developed by &nbsp;
            <a href="https://github.com/h-chagas" title="portfolio - software developer contact">Hugo Chagas</a>
        </p>
    </div>
  )
}

export default Footer