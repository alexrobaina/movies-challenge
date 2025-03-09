import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { useGetMovies } from '../../hooks/useGetMovies'
import { MoviesPage } from '../../pages/MoviesPage'
import { MOVIES_PAGE_TEXT } from '../../types/contants'

vi.mock('../../hooks/useGetMovies')
const mockUseGetMovies = useGetMovies as jest.MockedFunction<
  typeof useGetMovies
>

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

const mockMovies = [
  {
    title: 'Movie 1',
    description: 'Description 1',
    images: { 'Poster Art': { url: 'image1.jpg' } },
  },
  {
    title: 'Movie 2',
    description: 'Description 2',
    images: { 'Poster Art': { url: 'image2.jpg' } },
  },
]

describe('MoviesPage', () => {
  it('renders welcome message', () => {
    mockUseGetMovies.mockReturnValue({
      movies: mockMovies,
      isLoading: false,
      error: null,
      hasMore: false,
    })
    renderWithRouter(<MoviesPage />)

    expect(screen.getByText(MOVIES_PAGE_TEXT.title)).toBeInTheDocument()
    expect(screen.getByText(MOVIES_PAGE_TEXT.subtitle)).toBeInTheDocument()
  })

  it('displays loading state initially', () => {
    mockUseGetMovies.mockReturnValue({
      movies: [],
      isLoading: true,
      error: null,
      hasMore: false,
    })

    renderWithRouter(<MoviesPage />)
    expect(screen.getByTestId('cards-skeleton')).toBeInTheDocument()
  })

  it('displays error state', () => {
    mockUseGetMovies.mockReturnValue({
      movies: [],
      isLoading: false,
      error: new Error('Test error'),
      hasMore: false,
    })

    renderWithRouter(<MoviesPage />)
    expect(screen.getByText(/Error/i)).toBeInTheDocument()
  })

  it('displays success state', () => {
    mockUseGetMovies.mockReturnValue({
      movies: mockMovies,
      isLoading: false,
      error: null,
      hasMore: false,
    })

    renderWithRouter(<MoviesPage />)
    expect(screen.getByText(/Movie 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Movie 2/i)).toBeInTheDocument()
  })
})
