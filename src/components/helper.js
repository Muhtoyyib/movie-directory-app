// eslint-disable-next-line react-refresh/only-export-components
export async function getMovies() {
    const apiKey = '26735bb131b1591f8a04d7266ff33690';
  
    const movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((moviesData) => moviesData.results);
  
  
    return movies;
  }

  getMovies();
  
  // eslint-disable-next-line react-refresh/only-export-components
export async function getMoviebyId(id) {
    const movies = await getMovies();
    const movie = movies.find((contact) => contact.id === id);
  
    return movie ?? null;
  }