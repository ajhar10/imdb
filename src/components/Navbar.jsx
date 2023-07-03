import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='dark:bg-gray-600 bg-amber-100 flex justify-center p-4 lg:text-lg '>
        <NavbarItem title="Top Rated" params="fetchTopRated"/>
        <NavbarItem title="Trending" params="fetchTrending"/>
    </div>
  )
}
