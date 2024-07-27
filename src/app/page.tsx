import { api } from "~/trpc/server";
import HomePage from "./_components/home/HomePage";


export default async function Home() {

  const response = await api.google.getBooks({search: 'dogs'})
  console.log(response);

  return <>
    <HomePage/>
  </>
  
}
