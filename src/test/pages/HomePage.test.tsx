import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('HomePage', () => {
  it('renders welcome message', () => {
    renderWithRouter(<HomePage />)
    expect(screen.getByText('Welcome to Entertainment Hub')).toBeInTheDocument()
  })

  it('renders movies and series sections', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByText('Movies')).toBeInTheDocument()
    expect(screen.getByText('TV Series')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Discover the latest blockbusters and timeless classics',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Binge-worthy shows and exclusive series'),
    ).toBeInTheDocument()
  })

  it('renders movie and series images', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByAltText('Movies')).toBeInTheDocument()
    expect(screen.getByAltText('TV Series')).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByRole('link', { name: /movies/i })).toHaveAttribute(
      'href',
      '/movies',
    )
    expect(screen.getByRole('link', { name: /tv series/i })).toHaveAttribute(
      'href',
      '/series',
    )
  })
})
