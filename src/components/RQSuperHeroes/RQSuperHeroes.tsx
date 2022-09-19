import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useRQSuperHeroes from "../hooks/useRQSuperHeroes";

type Heroes = {id: number, name: string, alterEgo: string}

const RQSuperHeroes = () => {

  const onSuccess = ():void =>  {
   console.log(data)
  }
  const {isLoading, isFetching, isFetched, isError, data, error, refetch} = useRQSuperHeroes(onSuccess);

   const fetchHeroes = (): void => {
    refetch();
  } 

  console.log({isLoading, isFetching})

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    console.log((error as any).message)
    return <h2>{'error'}</h2>
  }

  console.log(data)

  return (
    <div>
      <h2>RQSuperHeroes</h2>
       <button style={{display: `${isFetched? 'none' : 'block'}`}} onClick={fetchHeroes}>Fetch heroes</button> 

       {!isLoading && data 
        ? data?.map((el,i) => {
            return <Link to={`/rq-super-heroes/${el.id}`} style={{display: 'block'}} key={i}>{el.name}</Link>;
          })
        : null}
    </div>
  );
};

export default RQSuperHeroes;
