'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface Props {
  handleChange: (e: string) => void;
}

const SearchArea: FC<Props> = ({handleChange}) => {
  return (
    <form className='flex justify-center mb-2 rounded-full items-center bg-white w-10/12 mx-auto h-7 drop-shadow-lg'>
      <input className='bg-inherit' type='text' onChange={(e) => {handleChange(e.target.value)}}/>
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch}  className='px-3'/>
      </button>
      
    </form>
  ) 
}

export default SearchArea