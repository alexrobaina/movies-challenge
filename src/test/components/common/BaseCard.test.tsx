import { render, screen, fireEvent } from '@testing-library/react'
import { BaseCard } from '../../../components/common/BaseCard'

describe('BaseCard', () => {
  it('renders children correctly', () => {
    render(
      <BaseCard>
        <div>Test Content</div>
      </BaseCard>,
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <BaseCard className="custom-class">
        <div>Content</div>
      </BaseCard>,
    )
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('custom-class')
  })

  it('handles onClick event', () => {
    const handleClick = vi.fn()
    render(
      <BaseCard onClick={handleClick}>
        <div>Clickable Content</div>
      </BaseCard>,
    )

    fireEvent.click(screen.getByText('Clickable Content'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('has default styles', () => {
    render(
      <BaseCard>
        <div>Content</div>
      </BaseCard>,
    )
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg', 'p-6')
  })

  it('combines default and custom classes', () => {
    render(
      <BaseCard className="custom-margin">
        <div>Content</div>
      </BaseCard>,
    )
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass(
      'bg-white',
      'rounded-lg',
      'shadow-lg',
      'p-6',
      'custom-margin',
    )
  })

  it('renders without onClick handler', () => {
    render(
      <BaseCard>
        <div>Non-clickable Content</div>
      </BaseCard>,
    )
    const card = screen.getByText('Non-clickable Content').parentElement
    expect(card).toBeInTheDocument()
    // Should not throw error when clicked without handler
    fireEvent.click(card!)
  })
})
