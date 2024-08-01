'use server'

import { api } from "~/trpc/server"

export const useFetchGenre = async (genre: string) => {
  return await api.google.fetchGenre({genre: genre});
}