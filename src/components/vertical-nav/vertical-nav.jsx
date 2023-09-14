import './vertical-nav.scss'
import Brand from '../../assets/tv.png';
import Home from '../../assets/Home.png'
import Movie from '../../assets/Movie Projector.png'
import Tv from '../../assets/TV-Show.png'
import Calendar from '../../assets/Calendar.png'

export default function VerticalNav(){
    return(
        <div className='vertical-nav'>
            <ul>
            <li className='brand'>
                <img src={Brand} alt='brand' />
                <h1> MovieBox</h1>
            </li>

        `    <li className='nav-list'>
                <img src={Home} alt='brand' />
                <a href="#home">Home</a>
            </li>`

            <li className='nav-list'>
                <img src={Movie} alt='brand' />
                <a href="#news">Movies</a>
            </li>

            <li className='nav-list'>
                <img src={Tv} alt='brand' />
                <a href="#contact">Tv Series</a>
            </li>

            <li className='nav-list'>
                <img src={Calendar} alt='brand' />
                <a href="#about">Upcoming</a>
            </li>

            </ul>
        </div>
    )
}