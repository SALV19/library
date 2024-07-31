import axios from "axios";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const googleData = createTRPCRouter({
  getBooks: publicProcedure
    .input(z.object({
      search: z.string(),
    }))
    .query(async ({input}) => {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + input.search);
      return response.data;
    }),
  fetchBook: publicProcedure
    .input(z.object({
      id: z.number(),
    }))
    .query(async ({input}) => {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes/' + input.id);
      return response.data;
    })
})
