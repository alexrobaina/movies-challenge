// HomePage.jsx
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import movies from '../../assets/images/movies.webp'
import series from '../../assets/images/series.webp'

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col items-center justify-center gap-12 h-full">
      <h1 className="text-4xl md:text-5xl mt-20 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
        Welcome to Entertainment Hub
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        <Link
          to="/movies"
          className="w-full md:w-[400px] bg-white/5 rounded-2xl overflow-hidden cursor-pointer 
                     backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/movies')}
          >
            <div className="p-6">
              <img
                alt="Movies"
                src={movies}
                className="w-full h-[250px] object-cover rounded-xl mb-6"
              />
              <h2 className="text-3xl font-semibold text-white mb-4">Movies</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Discover the latest blockbusters and timeless classics
              </p>
            </div>
          </motion.div>
        </Link>

        <Link
          to="/series"
          className="w-full md:w-[400px] bg-white/5 rounded-2xl overflow-hidden cursor-pointer 
                     backdrop-blur-lg border border-white/10 shadow-xl"
          onClick={() => navigate('/series')}
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/movies')}
          >
            <div className="p-6">
              <img
                src={series}
                alt="TV Series"
                className="w-full h-[250px] object-cover rounded-xl mb-6"
              />
              <h2 className="text-3xl font-semibold text-white mb-4">
                TV Series
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Binge-worthy shows and exclusive series
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </main>
  )
}
