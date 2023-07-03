import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the imdb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {/*Header*/}
        <Header/>
        {/*Navbar */}
        <Navbar/>
        {/*Searchbar */} 
        
        {children}
        </Providers>
      </body>
    </html>
  )
}
