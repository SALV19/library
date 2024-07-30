import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
  book: any;
}

const BookCard: FC<Props> = ({book}) => {
  return (
    <Link className='w-[45%] bg-[#CED1E3] rounded-lg h-[20rem] p-2 flex flex-col justify-top drop-shadow-xl overflow-hidden hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] shadow-black' 
      href={'/bookInfo'}
    >
      <img src={book.volumeInfo.imageLinks.smallThumbnail} className='h-[12rem] rounded-t-lg drop-shadow-md' />
      <h1>
        {book.volumeInfo.title}
      </h1>
      <p>
        pages: {book.volumeInfo.pageCount}
      </p>
      {book.saleInfo.listPrice ? 
        <p>
          precio: {book.saleInfo.listPrice.amount}
        </p> : null}
    </Link>
  )
}

export default BookCard