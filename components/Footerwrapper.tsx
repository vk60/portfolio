"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
 import { Navbar } from './Navbar';
function Footerwrapper() {
    const pathname=usePathname();
  return (
    <div>
       {pathname.startsWith("/details")?" ":(
        <>
        <Navbar/>
        </>
       )}
    </div>
  )
}

export default Footerwrapper
