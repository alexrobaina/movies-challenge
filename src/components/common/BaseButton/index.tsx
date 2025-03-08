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
  icon?: ReactElement
  isLoading?: boolean
  isDisabled?: boolean
  variant?: ButtonVariant
  backgroundColor?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const BUTTON_VARIANTS = {
  primary:
    'text-white bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-100 disabled:hover:bg-primary-100 disabled:shadow-none',
  secondary:
    'bg-gray-800 text-white hover:bg-gray-950 hover:text-white focus:bg-primary-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 disabled:shadow-none',
  tertiary:
    'border-2 border-gray-200 text-gray-800 hover:border-gray-800 hover:text-gray-800 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:hover:text-gray-200 disabled:shadow-none',
  link: 'bg-transparent text-gray-800 hover:text-gray-950 p-0 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:bg-transparent disabled:text-gray-200',
  icon: 'bg-transparent text-black p-2 hover:bg-button-primary-hover hover:text-white',
  delete: 'bg-error-500 text-white hover:bg-error-600',
} as const

const SIZE_CLASSES = {
  sm: 'px-4 h-8 text-sm',
  md: 'px-6 h-10 text-base',
  lg: 'px-6 h-12 text-base',
} as const

const TEXT_SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-base',
} as const

const ICON_SIZES = {
  sm: 'size-4',
  md: 'size-4',
  lg: 'size-5',
} as const

const ICON_ONLY_CLASS = {
  sm: 'size-7',
  md: 'size-8',
  lg: 'size-10',
} as const

export const BaseButton: FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  dataTest,
  isLoading,
  className,
  isDisabled,
  size = 'lg',
  backgroundColor,
  type = 'button',
  variant = 'primary',
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap font-kumbh-sans'

  const isIconOnly = icon && !text

  const buttonClasses = [
    baseClasses,
    BUTTON_VARIANTS[variant],
    isIconOnly ? ICON_ONLY_CLASS[size] : SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const renderContent = () => {
    if (isLoading) return <BaseLoading dataTest={`${dataTest}-loading`} />

    return (
      <>
        {icon && (
          <span className="flex items-center">
            {cloneElement(icon, {
              className: `${icon.props.className || ''} ${
                ICON_SIZES[size]
              }`.trim(),
            })}
          </span>
        )}
        {text && <span className={`${TEXT_SIZES[size]}`}>{text}</span>}
      </>
    )
  }

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
      {renderContent()}
    </button>
  )
}
