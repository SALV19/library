import React, { FC, useEffect, useState } from 'react'
import BookCard from './BookCard';

interface Props {
  books: any;
}



const BookList: FC<Props> = ({books}) => {    
  useEffect(() => {  }, [books])

  return (
    <div className='flex justify-center flex-wrap w-full gap-5 mt-5 pb-14'>
      {books ? 
        books.items.map((b: any, i: number) => (
          <BookCard book={b} key={i}/>
        ))
      : 'null'}
    </div>
  )
}

export default BookList