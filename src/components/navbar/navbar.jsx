import SearchBox from '../search-box/search-box';

import './navbar.scss'
import Brand from '../../assets/tv.png';
import Hamburger from '../../assets/Menu.png';

// eslint-disable-next-line react/prop-types
export default function Navbar({onSearchChange}){
    return(
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
        </div> 
    )
}