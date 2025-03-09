import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../services/api'

export const useGetMovies = (search?: string, limit?: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movies', search, limit],
    queryFn: () => getMovies({ search, limit }),
  })

  return {
    error,
    isLoading,
    movies: data || [],
    hasMore: data?.length === limit,
  }
}
