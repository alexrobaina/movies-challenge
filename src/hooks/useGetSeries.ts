import { useQuery } from '@tanstack/react-query'
import { getSeries } from '../services/api'

export const useGetSeries = (search?: string, limit?: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['series', search, limit],
    queryFn: () => getSeries({ search, limit }),
  })

  return {
    error,
    isLoading,
    series: data,
    hasMore: data?.length === limit,
  }
}
