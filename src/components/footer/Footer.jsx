import React from 'react'

import './footer.scss'
import { Link } from 'react-router-dom'

import bg from '../../assets/footerBg.jpg'
import logo from '../../assets/movieverse-logo.png'

function Footer() {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt=''/>
            <Link className='footer__content__logo__link' to="/">MovieVerse</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link className='footer-links' to="/">Home</Link>
            <Link className='footer-links' to="/">Contact us</Link>
            <Link className='footer-links' to="/">Terms of Services</Link>
            <Link className='footer-links' to="/">About us</Link>
          </div>
          <div className='footer__content__menu'>
            <Link className='footer-links' to="/">Live</Link>
            <Link className='footer-links' to="/">FAQ</Link>
            <Link className='footer-links' to="/">Premium</Link>
            <Link className='footer-links' to="/">Privacy Policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link className='footer-links' to="/">Must Watch</Link>
            <Link className='footer-links' to="/">Recent release</Link>
            <Link className='footer-links' to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer