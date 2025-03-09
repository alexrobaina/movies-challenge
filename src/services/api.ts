import axios from './axiosInstance' // Adjust your import as needed

const API_URL = '/546fd85e8651aa8e648a'

export const getMovies = async (filters?: {
  search?: string
  limit?: number
}) => {
  const { data } = await axios.get(API_URL)

  let movies = data.entries

  // Filter movies only
  movies = movies.filter(
    (item: { programType: string }) => item.programType === 'movie',
  )

  // Filter by search query if provided
  if (filters?.search) {
    movies = movies.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(filters.search!.toLowerCase()),
    )
  }

  // Sort movies by title
  movies.sort((a: { title: string }, b: { title: string }) =>
    a.title.localeCompare(b.title),
  )

  // Apply limit if provided
  if (filters?.limit) {
    movies = movies.slice(0, filters.limit)
  }

  return movies
}

export const getSeries = async (filters?: {
  search?: string
  limit?: number
}) => {
  const { data } = await axios.get(API_URL)

  let series = data.entries

  // Filter series only
  series = series.filter(
    (item: { programType: string }) => item.programType === 'series',
  )

  // Filter by search query if provided
  if (filters?.search) {
    series = series.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(filters.search!.toLowerCase()),
    )
  }

  // Sort series by title
  series.sort((a: { title: string }, b: { title: string }) =>
    a.title.localeCompare(b.title),
  )

  // Apply limit if provided
  if (filters?.limit) {
    series = series.slice(0, filters.limit)
  }

  return series
}
