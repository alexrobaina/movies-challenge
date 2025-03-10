import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../services/api'

export const useGetMovies = (
  search: string,
  page: number,
  limit: number,
  year?: number,
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', search, page, limit, year],
    queryFn: () => getMovies(search, page, limit, year),
  })

  return {
    error,
    isLoading,
    total: data?.total || 0,
    movies: data?.movies || [],
    totalPages: data?.totalPages || 1,
    currentPage: data?.currentPage || 1,
    hasMore: data ? data.currentPage < data.totalPages : false,
  }
}
