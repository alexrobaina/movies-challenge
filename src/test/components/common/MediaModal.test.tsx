import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MediaModal } from '../../../components/common/MediaModal'

// Mock ReactModal component
vi.mock('../../../../components/common/ReactModal', () => ({
  ReactModal: ({
    children,
    isOpen,
  }: {
    children: React.ReactNode
    isOpen: boolean
  }) => {
    if (!isOpen) return null
    return <div data-testid="mock-modal">{children}</div>
  },
}))

const mockMedia = {
  title: 'Test Movie',
  description: 'Test Description',
  images: {
    'Poster Art': {
      url: 'test-image.jpg',
    },
  },
}

describe('MediaModal', () => {
  it('renders media content when open', () => {
    render(<MediaModal isOpen={true} media={mockMedia} closeModal={() => {}} />)

    expect(screen.getByText('Test Movie')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByAltText('Test Movie')).toHaveAttribute(
      'src',
      'test-image.jpg',
    )
  })

  it('does not render when closed', () => {
    render(
      <MediaModal isOpen={false} media={mockMedia} closeModal={() => {}} />,
    )

    expect(screen.queryByText('Test Movie')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument()
  })

  it('handles null media data gracefully', () => {
    render(<MediaModal isOpen={true} media={null} closeModal={() => {}} />)

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
