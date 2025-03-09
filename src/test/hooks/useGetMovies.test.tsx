// useGetMovies.test.tsx (corrected with mocking)
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useGetMovies } from '../../hooks/useGetMovies'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

const mockedApiResponse = {
  total: 2,
  entries: [
    {
      title: 'Movie 1',
      description: 'Description 1',
      programType: 'movie',
      images: {
        'Poster Art': { url: 'image1.jpg' },
      },
    },
    {
      title: 'Movie 2',
      description: 'Description 2',
      programType: 'movie',
      images: {
        'Poster Art': { url: 'image2.jpg' },
      },
    },
  ],
}

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useGetMovies Hook', () => {
  it('fetches movie data correctly', async () => {
    ;(axios.get as jest.Mock).mockResolvedValue({ data: mockedApiResponse })

    const { result } = renderHook(() => useGetMovies('', 20), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.movies).toEqual(mockedApiResponse.entries)
    expect(result.current.movies).toHaveLength(2)
  })
})
