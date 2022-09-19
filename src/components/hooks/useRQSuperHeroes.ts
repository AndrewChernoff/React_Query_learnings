import axios from "axios";
import { useQuery } from "react-query";

type Heroes = {id: number, name: string, alterEgo: string}

const useRQSuperHeroes = (onSuccess: any) => {
    const { isLoading, isFetching, isFetched, isError, data, error, refetch } = useQuery(
        "query-heroes",
        async() => {
            const { data } = await axios.get<Heroes[]>(
                'http://localhost:3001/superheroes',
                {
                  headers: {
                    Accept: 'application/json',
                  },
                },
              );
              return data;
        },
        {
          onSuccess,
          //select: (data) => data.map(el => el.name + '!'),
          enabled: false,
        }, 
      );
      return {isLoading, isFetching, isFetched, isError, data, error, refetch}

}

export default useRQSuperHeroes