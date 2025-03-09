export const IconClose = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      strokeWidth="1.5"
      aria-hidden="true"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  )
}
