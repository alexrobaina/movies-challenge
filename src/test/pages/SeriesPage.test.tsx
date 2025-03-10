import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { useGetSeries } from '../../hooks/useGetSeries'
import { SeriesPage } from '../../pages/SeriesPage'
import { SERIES_PAGE_TEXT } from '../../types/contants'

vi.mock('../../hooks/useGetSeries')
const mockUseGetSeries = useGetSeries as jest.MockedFunction<
  typeof useGetSeries
>

const mockSeries = [
  {
    title: 'Series 1',
    description: 'Description 1',
    images: { 'Poster Art': { url: 'image1.jpg' } },
  },
  {
    title: 'Series 2',
    description: 'Description 2',
    images: { 'Poster Art': { url: 'image2.jpg' } },
  },
]

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('SeriesPage', () => {
  it('renders welcome message', () => {
    mockUseGetSeries.mockReturnValue({
      series: mockSeries,
      isLoading: false,
      error: null,
      hasMore: false,
      total: 2,
      totalPages: 1,
      currentPage: 1,
    })
    renderWithRouter(<SeriesPage />)

    expect(screen.getByText(SERIES_PAGE_TEXT.title)).toBeInTheDocument()
    expect(screen.getByText(SERIES_PAGE_TEXT.subtitle)).toBeInTheDocument()
  })

  it('displays loading state initially', () => {
    mockUseGetSeries.mockReturnValue({
      series: [],
      isLoading: true,
      error: null,
      hasMore: false,
      total: 0,
      totalPages: 0,
      currentPage: 0,
    })

    renderWithRouter(<SeriesPage />)
    expect(screen.getByTestId('cards-skeleton')).toBeInTheDocument()
  })

  it('displays error state', () => {
    mockUseGetSeries.mockReturnValue({
      series: [],
      isLoading: false,
      error: new Error('Test error'),
      hasMore: false,
      total: 0,
      totalPages: 0,
      currentPage: 0,
    })

    renderWithRouter(<SeriesPage />)
    expect(screen.getByText(/Error/i)).toBeInTheDocument()
  })

  it('displays success state', () => {
    mockUseGetSeries.mockReturnValue({
      series: mockSeries,
      isLoading: false,
      error: null,
      hasMore: false,
      total: 2,
      totalPages: 1,
      currentPage: 1,
    })

    renderWithRouter(<SeriesPage />)
    expect(screen.getByText(/Series 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Series 2/i)).toBeInTheDocument()
  })
})
