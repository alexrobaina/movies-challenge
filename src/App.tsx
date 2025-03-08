import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SeriesPage } from './pages/SeriesPage'
import { HomePage } from './pages/HomePage'

import './services/axiosInstance'

const routes = createBrowserRouter([
  {
    path: '/series',
    element: <SeriesPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
])

export const App: FC = () => {
  return <RouterProvider router={routes} />
}
