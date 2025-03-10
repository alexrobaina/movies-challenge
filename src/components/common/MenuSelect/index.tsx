interface Option {
  value: number
  label: string
}

interface MenuSelectProps {
  value: number
  options: Option[]
  onChange: (value: number) => void
  label?: string
}

export const MenuSelect = ({
  value,
  options,
  onChange,
  label,
}: MenuSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-100">{label}</label>}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="appearance-none bg-gray-800 text-gray-100 rounded-md px-5 py-4 pr-10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
