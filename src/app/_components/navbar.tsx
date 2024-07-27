'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faGear, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [selected, setSelected] = useState('Home')
  return (
    <div className='bg-[#9E99E4] rounded-t-3xl fixed bottom-0 w-full h-12 flex justify-between items-center px-14'>
      <Link href={'/'} onClick={() => {setSelected('Home')}}>
        <FontAwesomeIcon icon={faHouseChimney}  className={`size-7 ${selected === "Home" ? 'text-[#2E236C]' : 'text-[#CED1E3]'}`}/>
      </Link>
      <Link href={'/'} onClick={() => {setSelected('Compass')}}>
        <FontAwesomeIcon icon={faCompass}  className={`size-7 ${selected === "Compass" ? 'text-[#2E236C]' : 'text-[#CED1E3]'}`}/>
      </Link>
      <Link href={'/'} onClick={() => {setSelected('Gear')}}>
        <FontAwesomeIcon icon={faGear}  className={`size-7 ${selected === "Gear" ? 'text-[#2E236C]' : 'text-[#CED1E3]'}`}/>
      </Link>
      
    </div>
  )
}

export default Navbar