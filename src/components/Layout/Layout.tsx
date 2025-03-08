import { motion } from 'framer-motion'
import { FC, ReactElement, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  children?: ReactElement
}

const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className={`flex flex-col size-full ${
        pathname.includes('/login') ? '' : 'py-12'
      }`}
      transition={{ ease: 'easeOut', delay: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default Layout
