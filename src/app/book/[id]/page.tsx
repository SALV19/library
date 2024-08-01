'use client'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useFetchBooks from '~/hooks/useFetchData';


export default function Book({
  params: { id: bookId },
}: {
  params: { id: any };
}) {

  const [book, setBook] = useState<any>()

  useEffect(() => {
    const fetchBook = async () => {
      await useFetchBooks(bookId)
        .then(
          (response) => {
            setBook(response.items[0]);
            console.log(response.items[0])
            return response;
          },
          (error) => {alert(error)}
        );
    }

    fetchBook();
  }, [bookId])

  return (
    <div className='p-5'>
        <Link href={'/'} className='p-2'>
          <FontAwesomeIcon icon={faArrowLeft} className='size-5'/>
        </Link>
        {book 
      ? <div className='w-full pb-10  flex flex-col items-center'>
          <header className='flex gap-5 mb-3'>
            <img src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.imageLinks.smallThumbnail} className='drop-shadow-md rounded-md'/>
            <h1 className='text-3xl'>
              {book.volumeInfo.title}
            </h1>
          </header>
          <div className=' flex w-full justify-between mb-2'>
            <p>
              pages: {book.volumeInfo.pageCount}
            </p>
            <p>
            price:
              {book.saleInfo.amount ? book.saleInfo.listPrice.amount : 'Unknown'}
            </p>
          </div>

          <Link href={`https://play.google.com/store/books/details?id=${bookId}`} 
            className=' bg-[#9E99E4] rounded-xl flex justify-center w-1/2 m-3 p-2 drop-shadow-md shadow-md hover:shadow-[0px_0px_10px_rgb(0,0,0,0.3)] shadow-[#9E99E4]'>
            Buy
          </Link>

          <h2 className='text-lg'>Description:</h2>
          <aside className='text-sm'>
            {book.volumeInfo.description}
          </aside>
        </div>
        
        : <>
          Loading...
          </>
      }
    </div>
  )
}

