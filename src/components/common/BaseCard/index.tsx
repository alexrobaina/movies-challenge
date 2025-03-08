interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export const BaseCard = ({ children, className, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  )
}
