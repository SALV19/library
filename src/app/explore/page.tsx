'use client'

import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useFetchGenre } from '~/hooks/useFetchGenre'
import BookList from '../_components/home/BookList'

const Explore = () => {
  
  const genres = [
    'fantasy',
    'adventure',
    'literature',
    'action',
    'suspense',
    'science',
  ]

  const [genre, setGenre] = useState<any>()
  const [searchGenre, setSearchGenre] = useState<string>(genres[Math.floor(Math.random() * genres.length)] as string)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    const fetchBooks = async (search: string) => {
      await useFetchGenre(search)
        .then(
          (response) => setGenre(response),
          (error) => (alert(error)),
        )
    }

    fetchBooks(searchGenre);
  }, [searchGenre])

  const handleClick = (genre: string) => {
    setSearchGenre(genre);
    setFocus(false);
  }

  return (
    <div className='flex flex-col'>
      <div className='bg-[#FFF8F3] h-full p-3 flex justify-center' >
        <div className='w-2/3 flex flex-col items-center h-12' onClick={() => {setFocus(!focus)}}>
          <div className='w-full rounded-full bg-white h-10 flex flex-col'>
            <nav className='flex justify-between px-5 items-center w-full text-gray-600 relative h-10 '>
              {genre ? searchGenre : genre}
              <FontAwesomeIcon icon={faFilter}/>
            </nav>
          </div>
          <div className={`w-4/5  flex-col bg-white rounded-b-xl ${focus ? 'flex' : 'hidden'} relative top-0 z-10`}>
            {genres.map((genre, idx) => {
              return (
                <button key={idx} className='hover:bg-gray-200 p-1 text-start' onClick={() => handleClick(genre)}>
                  {genre}
                </button>
              )
            })}
          </div>
        </div>
      
      </div>
      {genre 
      ? genre.items ? <BookList books={genre} /> : null : null}
      
    </div>
  )
}

export default Explore