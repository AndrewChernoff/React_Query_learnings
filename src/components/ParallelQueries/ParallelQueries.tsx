import axios from "axios";
import { useQuery } from "react-query";

const ParallelQueries = () => {
    const fetchHeroes = () => {
        return axios.get('http://localhost:3001/superheroes')
    }
    const fetchFriends = () => {
        return axios.get('http://localhost:3001/friends')
    }

    const {data: heroes, error: heroesError} = useQuery('heroes', fetchHeroes,
    {
        onSuccess: () => {
            console.log(heroes);
        },
        onError: () => {
            console.log((heroesError as any).message)
        }
    })

    const {data: friends, error: friendsError} = useQuery('friends', fetchFriends,
    {
        onSuccess: () => {
            console.log(friends);
        },
        onError: () => {
            console.log((friendsError as any).message)
        }
    })

    return <div>
        <h2>ParallelQueries</h2>
    </div>
}

export default ParallelQueries;