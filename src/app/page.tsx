'use client'

import { api } from "~/trpc/server";
import HomePage from "./_components/home/HomePage";
import useFetchBooks from "~/hooks/useFetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchArea from "./_components/home/SearchArea";


export default async function Home() {

  // const response = await api.google.getBooks({search: 'dogs'})
  let result = null;

  const fetchBooks = async (e:string) => {
    result = await useFetchBooks(e);
    if(result){
      // console.log(result);
      // console.log(result.items[0].id);
      
    }
  };

  return <div className="bg-[#FFF8F3] h-[50rem] felx flex-col justify-center items-center w-full p-5">
    <SearchArea fetchBooks={fetchBooks} />
    <HomePage books={result}/>
  </div>
  
}
