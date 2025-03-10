import { FC } from 'react'

import { IconChevronLeft, IconChevronRight } from '../../../assets/icons'

interface Props {
  page: number
  take: number
  total: number
  setPage: (page: number) => void
}

export const Pagination: FC<Props> = ({ page, take, total, setPage }) => {
  const totalPages = Math.ceil(total / take)
  const showPagination = totalPages ? totalPages > 1 : false

  const neutralStyle =
    'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0'
  const activeStyle =
    'relative z-10 inline-flex items-center bg-purple-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600'

  return (
    <div className="flex mt-5 items-center justify-between py-3">
      <div className="flex cursor-pointer flex-1 justify-between sm:hidden">
        <button
          onClick={() => (page === 1 ? null : setPage(page - 1))}
          className="relative inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={() => (totalPages === page ? null : setPage(page + 1))}
          className="relative ml-3 inline-flex items-center rounded-md border cursor-pointer border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-100">
            Showing <span className="font-medium">{page}</span> to{' '}
            <span className="font-medium">{take}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          {showPagination && (
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                onClick={() => (page === 1 ? null : setPage(page - 1))}
                className="relative inline-flex items-center cursor-pointer rounded-r-md px-2 py-2 text-gray-100 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <IconChevronLeft className="size-5" />
              </a>
              {Array.from({ length: totalPages }, (_, index) => (
                <div key={index}>
                  <button
                    aria-current="page"
                    onClick={() => setPage(index + 1)}
                    className={`${
                      index + 1 === page ? activeStyle : neutralStyle
                    } cursor-pointer`}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
              <a
                onClick={() => (totalPages === page ? null : setPage(page + 1))}
                className="relative inline-flex items-center cursor-pointer rounded-r-md px-2 py-2 text-gray-100 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <IconChevronRight className="size-5" />
              </a>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}
