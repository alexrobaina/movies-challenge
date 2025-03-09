import { useState } from 'react'

interface UserMenuProps {
  email?: string
  onToggle?: () => void
  children?: React.ReactNode
  titleMenu?: string
}

export const MenuSelect = ({
  onToggle,
  children,
  titleMenu,
}: UserMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    onToggle?.()
  }

  return (
    <div className="sm:ml-6 sm:flex sm:items-center">
      <div className="ml-3">
        <button
          type="button"
          aria-haspopup="true"
          id="user-menu-button"
          onClick={handleToggle}
          aria-expanded={isMenuOpen}
          className="flex cursor-pointer bg-white border border-gray-100 rounded-lg px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {titleMenu}
        </button>
        {isMenuOpen && children}
      </div>
    </div>
  )
}
