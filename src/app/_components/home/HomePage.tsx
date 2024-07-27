'use client'

import React, { useState } from 'react'
import Current from './Current';
import SearchArea from './SearchArea';

const HomePage = () => {
  const [book, setBook] = useState('');

  const handleChange = (e: string) => {
    setBook(e);
  }

  return (
    <div className="bg-[#FFF8F3] h-[50rem] felx flex-col justify-center items-center w-full p-5">
      <SearchArea handleChange={handleChange}/>
      <Current/>
    </div>
  )
}

export default HomePage