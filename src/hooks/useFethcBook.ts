'use server'

import { api } from "~/trpc/server"

const useFetchBooks = async (id: number) => {
  return api.google.fetchBook({id: id});
}