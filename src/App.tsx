import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SeriesPage } from './pages/SeriesPage'
import { HomePage } from './pages/HomePage'
import { Navigation } from './components/Navigation'
import { MoviesPage } from './pages/MoviesPage'

import './services/axiosInstance'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/series',
        element: <SeriesPage />,
      },
      {
        path: '/movies',
        element: <MoviesPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])

export const App: FC = () => {
  return <RouterProvider router={routes} />
}
