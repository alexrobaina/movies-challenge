import { useQuery } from '@tanstack/react-query'
import { getSeries } from '../services/api'

export const useGetSeries = (
  search: string,
  page: number,
  limit: number,
  year?: number,
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['series', search, page, limit, year],
    queryFn: () => getSeries(search, page, limit, year),
  })

  return {
    error,
    isLoading,
    total: data?.total || 0,
    series: data?.series || [],
    totalPages: data?.totalPages || 1,
    currentPage: data?.currentPage || 1,
    hasMore: data ? data.currentPage < data.totalPages : false,
  }
}
