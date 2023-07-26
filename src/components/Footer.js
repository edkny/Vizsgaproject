import React from 'react'
import { Facebook } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            
        
        <Instagram/>
        <Facebook/>
        <Twitter/>

        </div>
      
    </div>
  )
}

export default Footer
