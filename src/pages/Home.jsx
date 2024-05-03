import React from 'react'
import { Link } from 'react-router-dom'

import HeroSlide from '../components/heroSlide/HeroSlide'
import { OutlineButton } from '../components/button/Button'

import MovieList from '../components/movielist/MovieList'
import { category, movieType, tvType } from '../api/tmdbApi'

function Home() {
  return (
    <>
      <HeroSlide />
      <div className='container'>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>Upcoming Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming}/>
        </div>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>Trending Shows</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>Top Rated Shows</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </>
  )
}

export default Home