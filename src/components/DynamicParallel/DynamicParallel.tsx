import axios from "axios"
import { useQueries } from "react-query"

type Props = {
    heroesIds: number[]
}

const DynamicParallel: React.FC<Props> = ({heroesIds}) => {

    const fetchUserById = (heroId: number) => {
        return axios.get(`http://localhost:3001/superheroes/${heroId}`)
    }

    const userQueries = useQueries(
        heroesIds.map(id => {
          return {
            queryKey: ['heroes-parallel', id],
            queryFn: () => fetchUserById(id),
          }
        })
      )

      console.log(userQueries)

    return <div> 
        <h2>DynamicParallel</h2>
    </div>
}

export default DynamicParallel;