import { useState } from 'react'
import { useGetSeries } from '../../hooks/useGetSeries'
import { MediaGrid } from '../../components/common/MediaGrid'
import { MediaModal } from '../../components/common/MediaModal'
import { MediaTypes, SERIES_PAGE_TEXT } from '../../types/contants'
import { Pagination } from '../../components/common/Pagination'

export const SeriesPage = () => {
  const [limit, setLimit] = useState(20)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedYear, setSelectedYear] = useState<number | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serieSelected, setSerieSelected] = useState<MediaTypes | null>(null)

  const { series, isLoading, error, total } = useGetSeries(
    search,
    currentPage,
    limit,
    selectedYear,
  )

  const handleOpenModal = (serie: MediaTypes) => {
    setIsModalOpen(true)
    setSerieSelected(serie)
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
        mediaItems={series}
        onSearch={setSearch}
        isLoading={isLoading}
        selectedYear={selectedYear}
        setMediaItem={handleOpenModal}
        title={SERIES_PAGE_TEXT.title}
        onYearChange={handleYearChange}
        onLimitChange={handleLimitChange}
        subtitle={SERIES_PAGE_TEXT.subtitle}
      />

      <Pagination
        page={currentPage}
        take={limit}
        total={total}
        setPage={handlePageChange}
      />

      <MediaModal
        isOpen={isModalOpen}
        media={serieSelected}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  )
}
