import { useState } from 'react'
import { useGetMovies } from '../../hooks/useGetMovies'
import { MediaGrid } from '../../components/common/MediaGrid'
import { MediaModal } from '../../components/common/MediaModal'
import { MediaTypes, MOVIES_PAGE_TEXT } from '../../types/contants'
import { Pagination } from '../../components/common/Pagination'

export const MoviesPage = () => {
  const [limit, setLimit] = useState(20)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedYear, setSelectedYear] = useState<number | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState<MediaTypes | null>(null)

  const { movies, isLoading, error, total } = useGetMovies(
    search,
    currentPage,
    limit,
    selectedYear,
  )

  const handleOpenModal = (movie: MediaTypes) => {
    setIsModalOpen(true)
    setMovieSelected(movie)
  }

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit)
    setCurrentPage(1) // Reset to first page when limit changes
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleYearChange = (year: number | undefined) => {
    setSelectedYear(year)
    setCurrentPage(1) // Reset to first page when year changes
  }

  return (
    <>
      <MediaGrid
        error={error}
        limit={limit}
        mediaItems={movies}
        onSearch={setSearch}
        isLoading={isLoading}
        selectedYear={selectedYear}
        setMediaItem={handleOpenModal}
        title={MOVIES_PAGE_TEXT.title}
        onYearChange={handleYearChange}
        onLimitChange={handleLimitChange}
        subtitle={MOVIES_PAGE_TEXT.subtitle}
      />

      <Pagination
        page={currentPage}
        take={limit}
        total={total}
        setPage={handlePageChange}
      />

      <MediaModal
        isOpen={isModalOpen}
        media={movieSelected}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  )
}
