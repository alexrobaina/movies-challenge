// src/test/components/common/BaseButton/BaseButton.test.tsx
import { render, screen } from '@testing-library/react'
import { BaseButton } from '../../../components/common/BaseButton'
import userEvent from '@testing-library/user-event'

describe('BaseButton Component', () => {
  it('renders correctly with provided text', () => {
    render(<BaseButton text="Click Me" />)

    // This should pass now
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument()
  })

  it('handles onClick event correctly', async () => {
    const handleClick = vi.fn()
    render(<BaseButton text="Click Me" onClick={handleClick} />)

    const button = screen.getByRole('button', { name: 'Click Me' })
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
