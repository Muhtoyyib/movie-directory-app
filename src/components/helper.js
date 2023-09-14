// eslint-disable-next-line react-refresh/only-export-components
export async function getMovies() {
    const apiKey = '26735bb131b1591f8a04d7266ff33690';
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch movies. Status: ${response.status}`);
      }
  
      const moviesData = await response.json();
      return moviesData.results;
    } catch (error) {
      // Handle the error and display a meaningful error message
      console.error('Error fetching movies:', error.message);
      throw error; // Optionally rethrow the error to let the caller handle it further
    }
  }
  
  
  // eslint-disable-next-line react-refresh/only-export-components
export async function getMoviebyId(id) {
    const movies = await getMovies();
    const movie = movies.find((contact) => contact.id === id);
  
    return movie ?? null;
  }