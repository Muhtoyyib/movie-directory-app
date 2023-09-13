import './search-box.scss'

// eslint-disable-next-line react/prop-types
export default function SearchBox ({onSearchChange, placeholder, className}){
    return(
        <div className='input-box'>
            <input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onSearchChange} />
            <i className="fa fa-search fa-sm icon"></i>
        </div>
    )
}