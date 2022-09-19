import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

type Hero = {id: number, name: string, alterEgo: string}

const fetchHeroes = async (id:number) => {
  const { data } = await axios.get<Hero>(
    `http://localhost:3001/superheroes/${id}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  return data;
}

const useRQHero = (id: number) => {
  const queryClient = useQueryClient()
    
    const { isLoading, isFetching, isFetched, isError, data, error } = useQuery(
        ["query-heroes", id],
        () => fetchHeroes(id),
        {
          initialData: (): any => {
console.log(queryClient.getQueryData(['query-heroes']))      
       const hero = (queryClient.getQueryData(['query-heroes']) as Hero[])?.find((item) => item.id === id)

      if (hero) {
        return {data: hero} 
      } else {
        return undefined
      }
      },
          enabled: !!id,
        }, 
      );
      return {isLoading, isFetching, isFetched, isError, data, error}

}

export default useRQHero;