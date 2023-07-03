import React from 'react';
import MenuItems from './MenuItems';
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className='py-6 flex justify-between mx-2 items-center max-w-6xl sm:mx-auto'>
        <div className='flex'>
            <MenuItems title="Home" address="/" Icon={AiFillHome}/>
            <MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill}/>
            
        </div>
        <div className='flex items-center space-x-5'>
            <DarkModeSwitch/>
            <Link href="/">
                <h2 className='text-2xl' ><span className='bg-amber-500 rounded-lg px-2 py-1 font-bold mr-1'>IMDb</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>
    </div>
  )
}
