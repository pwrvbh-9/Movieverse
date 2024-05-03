import React, { useEffect } from 'react'
import './header.scss'

import { Link, useLocation } from 'react-router-dom'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV Series',
    path: '/tv'
  }
]

function Header() {
  const { pathname } = useLocation()

  useEffect(() => {
    const shrinkHeader = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const header = document.querySelector('.header');
      if (header && scrollPosition > 100) {
        header.classList.add('shrink');
      } else if (header) {
        header.classList.remove('shrink');
      }
    }

    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  return (
    <div className='header'>
      <div className='header__wrap container'>
        <div className='logo'>
          <Link to="/" className='logo__Link'>MovieVerse</Link>
        </div>
        <ul className='header__nav'>
          {
            headerNav.map((e, i) => (
              <li key={i} className={`${e.path === pathname ? 'active' : ''}`}>
                <Link to={e.path} className='header__nav__link'>
                  {e.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header
