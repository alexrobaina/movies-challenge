// BaseButton.jsx
import { FC, ReactElement, ButtonHTMLAttributes, cloneElement } from 'react'
import { BaseLoading } from '../BaseLoading'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'icon'
  | 'delete'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  dataTest?: string
  size?: ButtonSize
  className?: string
  icon?: ReactElement<{ className?: string }>
  isLoading?: boolean
  isDisabled?: boolean
  variant?: ButtonVariant
  backgroundColor?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const BUTTON_VARIANTS = {
  primary:
    'text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-400',
  secondary:
    'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500',
  tertiary:
    'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500',
  link:
    'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
  icon: 'p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800',
  delete: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
}

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const BaseButton: FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  dataTest,
  isLoading,
  className,
  isDisabled,
  size = 'md',
  backgroundColor,
  type = 'button',
  variant = 'primary',
  ...rest
}) => {
  const baseClasses =
    'inline-flex cursor-pointer items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300'

  const buttonClasses = [
    baseClasses,
    SIZE_CLASSES[size],
    BUTTON_VARIANTS[variant],
    isDisabled || isLoading ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      data-test={dataTest}
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...rest}
    >
      {isLoading ? (
        <BaseLoading />
      ) : icon ? (
        cloneElement(icon, { className: 'mr-2' })
      ) : null}
      {text}
    </button>
  )
}
