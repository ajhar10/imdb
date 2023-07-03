"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

export default function NavbarItem({params,title}) {
    const useParams = useSearchParams();
    const genre = useParams.get("genre")
    console.log(useParams);
  return (
    <div>
        <Link className={`hover:text-amber-600 font-semibold p-2 m-4 ${genre && genre===params && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`} href={`/?genre=${params}`}>{title}</Link>
    </div>
  )
}
