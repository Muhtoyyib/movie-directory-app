import { Link } from 'react-router-dom';

import './card-component.scss'
import Heart from '../../assets/Heart.png'

// eslint-disable-next-line react/prop-types
export default function CardComponent ({movie}){
    // eslint-disable-next-line react/prop-types
    const { title, poster_path, release_date, id} = movie;
    const currentPath = window.location.pathname;
    let link = '';

    console.log(currentPath);

    if (currentPath === '/movies') { 
        link = `${id}`;
    } else if (currentPath === '/') {
        link = `movies/${id}`
    } 


    return(
        <div data-testid='movie-card'>
        {

        }
            <Link to={link} className='movie-card-container' >
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={`${title}`} data-testid = 'movie-poster'/>

                <div className='footer'>
                    <span className='title' data-testid = 'movie-title' >{title}</span>
                    <span className='release-date' data-testid= 'movie-release-date'>{release_date}</span>
                </div>

                <button><img src={Heart} alt='add to favourite' className='add-to-fav'/></button> 
            </Link>
        </div>
    )
}