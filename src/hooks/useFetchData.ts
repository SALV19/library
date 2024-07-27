'use server'

import { api } from "~/trpc/server"

const useFetchBooks = async (e: string) => {
  if (e){
    return await api.google.getBooks({search: e});
  }
}

export default useFetchBooks;