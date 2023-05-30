"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {MdDarkMode} from "react-icons/md"
import {MdLightMode} from "react-icons/md"
export default function DarkModeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { systemTheme,theme, setTheme } = useTheme();
    const currentTheme = theme==="system"?systemTheme:theme;
    useEffect(()=>setMounted(true),[])
    console.log(theme);
  return (
    <>
    {mounted && (currentTheme==="dark"?(<MdLightMode className='text-xl cursor-pointer hover:text-amber-500'  onClick={()=>setTheme("light")}/>):( 
    <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme("dark")}/>))}
   
    </>
  )
}
