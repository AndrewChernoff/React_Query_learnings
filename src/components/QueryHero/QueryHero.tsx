import { useLocation } from "react-router-dom";
import useRQHero from './../hooks/useRQHero';

const QueryHero = () => {
    const {pathname} = useLocation();

    const id = +pathname.slice(-1)

    const {isLoading, data} = useRQHero(id)
    
    return (
        <div>
            {isLoading ? <h2>Loading...</h2> 
            :data ? <div>{data?.name} is named {data?.alterEgo} </div>
        : <div>character is not found </div> }
            
        </div>
    )
}

export default QueryHero;