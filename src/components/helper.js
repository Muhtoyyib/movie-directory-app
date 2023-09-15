// eslint-disable-next-line react-refresh/only-export-components
export async function getMovies() {
    const apiKey = '26735bb131b1591f8a04d7266ff33690';
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);

    //   const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTZlYWM4YWIwZjRjNjlmZTA2ZjkyZjYwMjhlYzhiYiIsInN1YiI6IjY0ZmYxMjc3ZGI0ZWQ2MTAzNDNmMWRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPbQaUqLz-3qbYfpHMjRa9G-ODlMjWvXaepvu6bvoCY",
    //   },
    // });
  
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
  

export async function  getMovieWithID (id) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTZlYWM4YWIwZjRjNjlmZTA2ZjkyZjYwMjhlYzhiYiIsInN1YiI6IjY0ZmYxMjc3ZGI0ZWQ2MTAzNDNmMWRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPbQaUqLz-3qbYfpHMjRa9G-ODlMjWvXaepvu6bvoCY",
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}
