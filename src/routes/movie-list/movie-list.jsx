import { useLoaderData } from "react-router-dom";
import CardComponent from "../../components/card-component/card-component"
import { getMovies } from "../../components/helper";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    let movies = await getMovies();

    return { movies }
}


export default function MovieList (){
    const {movies} = useLoaderData()
   return(
    <div className='products-container'>
    {
     movies.map((movie) => {
       return(
         <CardComponent key={movie.id} movie={movie} />
       )
     })
    }
    </div>
    )
}