import { useState, useEffect} from 'react'
import SearchBox from '../../components/search-box/search-box'

import './root.scss'
import Poster from '../../assets/Poster.png'
import Brand from '../../assets/tv.png'
import Hamburger from '../../assets/Menu.png'
import Imdb from '../../assets/IMDB.png'
import RottenTomato from '../../assets/Rotten Tomatoes.png'

export default function Root(){
  const [searchField, setSearchField] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(()=>{
    const apiKey = '26735bb131b1591f8a04d7266ff33690';

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    })
    .catch((err) => {
      setError(err.message);
    });
  }, []);

  console.log(movies);
  
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
   return setSearchField(searchFieldString);
  };
    return(
      <>
       <div className="jumbotron" style={{backgroundImage: `url(${Poster})`}}>

        <div className="jumbotron-child">

        <div className='navbar'>
          <ul>
            <li className='brand'>
              <img src={Brand} alt='brand' />
              <h1> MovieBox</h1>
            </li>

            <li> 
              <SearchBox onSearchChange={onSearchChange} placeholder='What do you want to watch?' className='monsters-search-box' />
            </li>

            <li className='sign-in'>
              <h1> <a href='#'> Sign In</a></h1>
              <img src={Hamburger} alt='Hamburger' />
            </li>
          </ul>
        </div> {/* Navbar end */}

        <div className='featured-text'>
          <h1> 
            John Wick 3: <br /> Parabellum
          </h1>

          <div className='rating'>
            <img src={Imdb} alt='IMDB' />
            <img src={RottenTomato} alt='tomato' />
          </div>

          <p>
          John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
          </p>
        </div>

        <button type='button' className='featured-button'> <i className="fa fa-play icon"></i> Watch Trailer</button>

        </div> {/* Jumbotron-child end */}

       </div> { /* jumbotron */}

       <div className='featured-movies'>
          <div className='directory'>
            <h2>Featured Movie</h2>
            <a href='#' target='_blank'> See More <i className="fa fa-solid fa-greater-than icon" style={{color: 'red'}}></i></a>
          </div>
       </div> {/* featured-movies-end */}
      </>
    )
}