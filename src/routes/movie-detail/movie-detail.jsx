import { getMoviebyId } from "../../components/helper";
import { useLoaderData } from "react-router-dom";
import VerticalNav from "../../components/vertical-nav/vertical-nav";

import './movie-detail.scss'
  
  // eslint-disable-next-line react-refresh/only-export-components
  export async function loader({ params }) {
    let movie = await getMoviebyId(Number(params.movieId));

    return { movie }
  }
  

export default function MovieDetails (){ 
    const { movie } = useLoaderData();

    console.log(movie);
    const {title , backdrop_path, release_date, overview } = movie

    const localDateStr = release_date;
    const localDate = new Date(localDateStr);
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
    const utcDateString = utcDate.toISOString();



    return(
      <div className="display-movieDetails-container">
        <VerticalNav />

        <div className="movie-detail-container">
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="movie_poster" />

        <div className="movie-details">
          <p className="title" data-testid='movie-title'>{title}</p>
          <p className="release-date" data-testid='movie-release-date'>{utcDateString}</p>
        </div>

        <p className="overwiew" data-testid='movie-overview'>{overview}</p>
      </div>
      </div>

    )
}


