export const CardsSkeleton = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100" />
          </div>
        </div>
      ))}
    </div>
  )
}
