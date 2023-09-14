import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../../components/card-component/card-component';
import SearchBox from '../../components/search-box/search-box';
import { getMovies } from '../../components/helper';

import './root.scss';
import Brand from '../../assets/tv.png';
import Hamburger from '../../assets/Menu.png';
import Rating from '../../assets/Rating.png';
import Play from '../../assets/play.png'
import Icon from '../../assets/Icon.png'
import { useLoaderData } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
  let movies = await getMovies();

  return { movies }
}

export default function Root() {
  const { movies } = useLoaderData()
  console.log(movies);
  const [searchField, setSearchField] = useState('');
  movies.sort((a, b) => {
    if (a.popularity < b.popularity) return -1;
    if (a.popularity > b.popularity) return 1;
    return 0;
  });
  const [filteredMovies, setFilteredMovies] = useState([]);
  const randomNum = Math.floor(Math.random() * 20)
  const {poster_path, title, overview} = movies[randomNum];


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(()=>{
    const newFilteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField);
     })

     setFilteredMovies(newFilteredMovies)
  },[movies, searchField])

  return (
    <>
    <div className="jumbotron" style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original${poster_path}`})`}}>
      <div className="jumbotron-child">
        <div className='navbar'>
            <ul>
              <li className='brand'>
                <img src={Brand} alt='brand' />
                <h1> MovieBox</h1>
              </li>

              <li> 
                <SearchBox onSearchChange={onSearchChange} placeholder='What do you want to watch?' />
              </li>

              <li className='sign-in'>
                <h1> <a href='#'> Sign In</a></h1>
                <img src={Hamburger} alt='Hamburger' />
              </li>
            </ul>
        </div> {/* Navbar end */}

        <div className='featured-text'>
          <h1> 
            {title}
          </h1>

          <div className='rating'>
            <img src={Rating} alt='IMDB' className='imdb' />
          </div>

          <p>
            {overview}
          </p>
        </div>

        <button type='button' className='featured-button'> <img src={Play} /> Watch Trailer</button>

      </div> {/* Jumbotron-child end */}
    </div>  {/* jumbotron */}

     <div className='featured-movies'>
        <div className='directory'>
          <h2>Featured Movie</h2>
          <Link to='movies' className='search-link'>
            <p> See More</p>
            <img src={Icon} alt='icon' className='search-icon'/>
          </Link>
        </div>
     </div> {/* featured-movies-end */}

     <div className='products-container'>
     {
      filteredMovies.slice(0,10).map((movie) => {
        return(
          <CardComponent key={movie.id} movie={movie} />
        )
      })
     }
     </div>

     <div className='root-footer'>
        <div className='socials'>
          <a href='https://web.facebook.com/akande.olalekan.1238/' target='_blank' rel="noreferrer"> 
           <i className="fa fa-facebook"></i>
          </a>

          <a href='https://www.instagram.com/devtoheeb/?hl=en' target='_blank' rel="noreferrer">
           <i className="fa fa-instagram footer-icon"></i> 
          </a>

          <a href='https://twitter.com/devtoheeb' target='_blank' rel="noreferrer"> 
            <i className="fa fa-twitter footer-icon"></i>
          </a>

          <a href='https://www.youtube.com/channel/UCqalVAdpi_Dx3IfXO5Kl6jQ' target='_blank' rel="noreferrer"> 
            <i className="fa fa-youtube footer-icon"></i>
          </a> 
        </div>

        <div className='footer-sig'>
         <a href='#'> Conditions of Use</a>
         <a href='#'> Privacy & Policy</a>
         <a href='#'> Press Room</a>
        </div>

        <p>© 2023 MovieBox Replica by Akande Olalekan Toheeb  </p>
     </div>
    </>
  )
}