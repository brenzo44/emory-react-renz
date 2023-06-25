import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
      <div className='footer-container'>
        <p>Weather Predictor made with usage of Zippopotam and Open-Meteo. Usage is exclusively for Emory assessment.</p>
        <p>Put together by Brett Renz</p>
      </div>
    );
  }
  
  export default Footer;