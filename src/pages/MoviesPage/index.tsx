import { useState } from 'react'
import { useGetMovies } from '../../hooks/useGetMovies'
import { MediaGrid } from '../../components/common/MediaGrid'
import { BaseButton } from '../../components/common/BaseButton'
import { MediaModal } from '../../components/common/MediaModal'
import { MediaTypes } from '../../types/contants'

export const MoviesPage = () => {
  const [limit, setLimit] = useState(20)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState<MediaTypes | null>(null)
  const { movies, isLoading, error, hasMore } = useGetMovies(search, limit)

  const handleOpenModal = (movie: MediaTypes) => {
    setIsModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <>
      <MediaGrid
        error={error}
        mediaItems={movies}
        onSearch={setSearch}
        isLoading={isLoading}
        setMediaItem={handleOpenModal}
        title="Discover Amazing Movies"
        onLoadMore={() => setLimit(limit + 20)}
        subtitle="Explore our curated collection of blockbusters, indie gems, and timeless classics. Your next favorite movie is waiting to be discovered."
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
        media={movieSelected}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  )
}
