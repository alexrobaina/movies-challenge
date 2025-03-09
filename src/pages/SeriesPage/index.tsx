import { useState } from 'react'
import { useGetSeries } from '../../hooks/useGetSeries'
import { MediaGrid } from '../../components/common/MediaGrid'
import { BaseButton } from '../../components/common/BaseButton'
import { MediaModal } from '../../components/common/MediaModal'
import { MediaTypes } from '../../types/contants'

export const SeriesPage = () => {
  const [limit, setLimit] = useState(20)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serieSelected, setSerieSelected] = useState<MediaTypes | null>(null)
  const { series, isLoading, error, hasMore } = useGetSeries(search, limit)

  const handleOpenModal = (serie: MediaTypes) => {
    setIsModalOpen(true)
    setSerieSelected(serie)
  }

  return (
    <>
      <MediaGrid
        error={error}
        mediaItems={series}
        onSearch={setSearch}
        isLoading={isLoading}
        setMediaItem={handleOpenModal}
        title="Discover Amazing Series"
        onLoadMore={() => setLimit(limit + 20)}
        subtitle="Explore our curated collection of binge-worthy shows, drama series, and exclusive content. Your next favorite series is waiting to be discovered."
      />

      {hasMore && (
        <div className="flex justify-center mt-12">
          <BaseButton
            disabled={isLoading}
            onClick={() => setLimit(limit + 20)}
            text={isLoading ? 'Loading...' : 'Load More'}
          />
        </div>
      )}

      <MediaModal
        isOpen={isModalOpen}
        media={serieSelected}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  )
}
