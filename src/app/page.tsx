'use client'

import useFetchBooks from "~/hooks/useFetchData";
import SearchArea from "./_components/home/SearchArea";
import { useState } from "react";
import BookList from "./_components/home/BookList";

export default function Home() {

  const [books, setBooks] = useState<any>()

  const fetchBooks = async (e:string) => {
    await useFetchBooks(e)
      .then(
        (response) => {
          setBooks(response);
          return books;
        },
        (error) => alert(error)
      );
      if(books) {
        console.log(books.items[0]);
      }
  };

  return <div className=" h-[50rem] felx flex-col justify-center items-center w-full p-5">
    <SearchArea fetchBooks={fetchBooks} />
    {books ? <BookList books={books}/> : <p className="w-full flex justify-center">Search...</p>}
    
    
  </div>
  
}
