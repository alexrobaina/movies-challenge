import { ChangeEvent, FC, ReactElement } from 'react'
import { IconSearch } from 'assets/icons'

interface BaseInputProps {
  name?: string
  error?: string
  label?: string
  isSearch?: boolean
  placeholder: string
  helperText?: string
  isDisabled?: boolean
  value?: string | number
  iconLeft?: ReactElement
  iconRight?: ReactElement
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'email' | 'password' | 'number' | 'date'
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const baseInputClasses = `
  block 
  w-full 
  h-10 
  rounded-[4px] 
  border-0 
  py-1.5 
  text-gray-900 
  ring-1 
  ring-inset 
  ring-gray-400 
  outline-none
  placeholder:text-neutral-500 
  placeholder:text-sm 
  focus:ring-primary-300 
  sm:text-sm 
  sm:leading-6 
  pl-3
`

export const BaseInput: FC<BaseInputProps> = ({
  name,
  value,
  label,
  error,
  onBlur,
  isSearch,
  iconLeft,
  iconRight,
  helperText,
  isDisabled,
  placeholder,
  handleChange,
  type = 'text',
  ...props
}) => {
  const inputClasses = [
    baseInputClasses,
    error && 'ring-red-500',
    iconLeft && 'pl-9',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={`relative w-full ${error ? 'mb-3' : ''}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-800"
        >
          {label}
        </label>
      )}

      <input
        {...props}
        id={name}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        disabled={isDisabled}
        onChange={handleChange}
        className={inputClasses}
        placeholder={placeholder}
      />

      {iconLeft && (
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
          {iconLeft}
        </div>
      )}

      {iconRight && (
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
          {iconRight}
        </div>
      )}

      {isSearch && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-500 p-2.5 rounded-[4px]">
          <IconSearch className="size-5 text-white" />
        </div>
      )}

      {helperText && (
        <p className="absolute -bottom-5 left-3 text-xs text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="absolute -bottom-5 left-3 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
