import { IconArrowDown } from '../../../assets/icons'

interface YearSelectProps {
  value: number | undefined
  onChange: (year: number | undefined) => void
  label?: string
}

export const YearSelect = ({ value, onChange, label }: YearSelectProps) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => currentYear - i,
  )

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-100">{label}</label>}
      <div className="relative">
        <select
          value={value || ''}
          onChange={(e) => {
            const year = e.target.value ? Number(e.target.value) : undefined
            onChange(year)
          }}
          className="appearance-none bg-gray-800 text-gray-100 rounded-md px-5 py-4 pr-10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
          <IconArrowDown className="text-gray-100 size-5" />
        </div>
      </div>
    </div>
  )
}
