import React from 'react'
import Link from 'next/link'
export default function MenuItems({title,address,Icon}) {
  return (
    <div className='mx-4 lg:mx-6 hover:text-amber-700 '>
        <Link href={address}>
            <Icon className="text-2xl sm:hidden mx-4 "/>
            <p className='hidden sm:inline text-sm '>{title}</p>
        </Link>
    </div>
  )
}
