'use client'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import useFetchBooks from '~/hooks/useFetchData'


interface Props {
  fetchBooks:  (e:string) => Promise<void>;
}

const SearchArea: FC<Props> = ({fetchBooks}) => {
  
  return (
    <form className='flex justify-center mb-2 rounded-full items-center bg-white w-10/12 mx-auto h-7 drop-shadow-lg' onSubmit={(e) => e.preventDefault()}>
      <input className='bg-inherit' type='text' onChange={(e) => fetchBooks(e.target.value)}/>
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch}  className='px-3'/>
      </button>
    </form>
  ) 
}

export default SearchArea

function useFetchData(arg0: string) {
  throw new Error('Function not implemented.')
}
