import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root, {loader as rootLoader} from './routes/root/root'
import MovieDetails, {loader as movieLoader} from './routes/movie-detail/movie-detail'
import { MovieProvider } from './context/movies-context'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
    loader: movieLoader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)
