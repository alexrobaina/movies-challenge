import { ReactModal } from '../ReactModal'
import { MediaTypes } from '../../../types/contants'

interface MediaModalProps {
  isOpen: boolean
  media: MediaTypes | null
  closeModal: () => void
}

export const MediaModal = ({ isOpen, media, closeModal }: MediaModalProps) => {
  if (!media) return null

  return (
    <ReactModal
      width="50%"
      height="auto"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <img
          alt={media.title}
          src={media.images['Poster Art'].url}
          className="md:w-[250px] w-full h-[400px] object-cover rounded-md"
        />
        <div className="flex flex-col gap-8">
          <h2 className="text-gray-100 text-3xl font-medium">{media.title}</h2>
          <p className="text-gray-100 text-xl">{media.description}</p>
        </div>
      </div>
    </ReactModal>
  )
}
