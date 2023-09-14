import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root, {loader as rootLoader} from './routes/root/root'
import MovieList, {loader as movieListLoader} from './routes/movie-list/movie-list'
import MovieDetails, {loader as movieLoader} from './routes/movie-detail/movie-detail'
import ErrorPage from './routes/error-page/error-page'
import { MovieProvider } from './context/movies-context'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
    loader: movieLoader
  },
  {
    path: '/movies',
    element: <MovieList />,
    errorElement: <ErrorPage />,
    loader: movieListLoader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)
