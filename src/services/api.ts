import axios from 'axios'

const API_URL = '/546fd85e8651aa8e648a'

export const getMovies = async (
  search: string,
  page: number,
  limit: number,
  year?: number,
) => {
  const response = await axios.get(API_URL)
  let movies = response.data.entries.filter(
    (movie: { programType: string }) => movie.programType === 'movie',
  )

  // Apply search filter if exists
  if (search) {
    movies = movies.filter((movie: { title: string }) =>
      movie.title.toLowerCase().includes(search.toLowerCase()),
    )
  }

  // Apply year filter if exists
  if (year) {
    movies = movies.filter(
      (movie: { releaseYear: number }) => movie.releaseYear === year,
    )
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedMovies = movies.slice(startIndex, endIndex)

  return {
    movies: paginatedMovies,
    total: movies.length,
    currentPage: page,
    totalPages: Math.ceil(movies.length / limit),
  }
}

export const getSeries = async (
  search: string,
  page: number,
  limit: number,
  year?: number,
) => {
  const response = await axios.get(API_URL)
  let series = response.data.entries.filter(
    (serie: { programType: string }) => serie.programType === 'series',
  )

  // Apply search filter if exists
  if (search) {
    series = series.filter((serie: { title: string }) =>
      serie.title.toLowerCase().includes(search.toLowerCase()),
    )
  }

  // Apply year filter if exists
  if (year) {
    series = series.filter(
      (serie: { releaseYear: number }) => serie.releaseYear === year,
    )
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedSeries = series.slice(startIndex, endIndex)

  return {
    series: paginatedSeries,
    total: series.length,
    currentPage: page,
    totalPages: Math.ceil(series.length / limit),
  }
}
