import { Link } from 'react-router-dom';
import './card-component.scss'

// eslint-disable-next-line react/prop-types
export default function CardComponent ({movie}){
    // eslint-disable-next-line react/prop-types
    const { title, poster_path, release_date, id} = movie;

    return(
        <div data-testid='movie-card'>
            <Link to={`movies/${id}`} className='movie-card-container' >
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`${title}`} data-testid = 'movie-poster'/>

                <div className='footer'>
                    <span className='title' data-testid = 'movie-title' >{title}</span>
                    <span className='release-date' data-testid= 'movie-release-date'>{release_date}</span>
                </div>
            </Link>
        </div>
    )
}