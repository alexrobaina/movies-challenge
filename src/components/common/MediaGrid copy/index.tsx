import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseInput } from '../BaseInput'
import { CardsSkeleton } from '../CardsSkeleton'
import { IconArrowLeft } from '../../../assets/icons'

interface MediaGridProps {
  items: Array<{
    title: string
    images: {
      'Poster Art': {
        url: string
      }
    }
  }>
  title: string
  error: unknown
  subtitle: string
  isLoading: boolean
  onLoadMore: () => void
  setItem: (item: {
    id: string
    title: string
    images: {
      'Poster Art': {
        url: string
      }
    }
  }) => void
  onSearch: (search: string) => void
}

export const MediaGrid = ({
  title,
  items,
  error,
  setItem,
  subtitle,
  onSearch,
  isLoading,
}: MediaGridProps) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  if (error)
    return (
      <div className="text-red-500 dark:text-red-400">
        <h1 className="text-4xl font-bold">Error fetching data</h1>
        <p
          className="text-xl cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Please try again later
        </p>
      </div>
    )

  return (
    <div className="min-h-screen p-4">
      <div
        onClick={() => navigate('/')}
        className="flex items-center mb-4 cursor-pointer"
      >
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <IconArrowLeft className="size-8" />
        </button>
        <span className="text-2xl text-gray-500 dark:text-gray-400">Home</span>
      </div>

      <div className="flex flex-col justify-start mb-12 mt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl">
          {subtitle}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <BaseInput
          value={search}
          placeholder="Search..."
          handleChange={handleSearch}
        />
      </div>

      {isLoading ? (
        <CardsSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              onClick={() =>
                setItem({
                  id: item.id,
                  title: item.title,
                  images: item.images,
                })
              }
              className="bg-white cursor-pointer dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:border-1 hover:border-white hover:scale-105 hover:opacity-70 transition-transform duration-300"
            >
              <img
                alt={item.title}
                src={item.images['Poster Art'].url}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
