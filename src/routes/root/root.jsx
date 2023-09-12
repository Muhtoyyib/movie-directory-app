import { useState } from 'react'
import SearchBox from '../../components/search-box/search-box'

import './root.scss'
import Poster from '../../assets/Poster.png'
import Brand from '../../assets/tv.png'
import Hamburger from '../../assets/Menu.png'

export default function Root(){
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
   return setSearchField(searchFieldString);
  };
    return(
      <div className="main-container">
       <div className="jumbotron" style={{backgroundImage: `url(${Poster})`}}>
        <div className="jumbotron-child">
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
        </div>
       </div>
      </div>
    )
}