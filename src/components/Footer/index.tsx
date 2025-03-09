import { IconAppleStore } from '../../assets/icons/iconAppleStore'
import { IconGithub } from '../../assets/icons/iconGithub'
import { IconLinkedin } from '../../assets/icons/iconLinkedin'

export const Footer = () => {
  return (
    <footer className="mt-20 p-4 sm:p-8">
      <div className="py-12 px-4">
        <div className="flex flex-col gap-12">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/alexrobaina/movies-challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-300 transition-colors"
            >
              <IconGithub className="size-14" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/alexrobaina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-300 transition-colors"
            >
              <IconLinkedin className="size-14" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:items-center sm:flex-row sm:justify-between gap-4 mt-22">
          <p className="text-base text-gray-100">
            &copy; {new Date().getFullYear()} Entertainment Hub. All rights
            reserved.
          </p>
          <div className="flex w-[250px] gap-3 border-2 border-gray-100 rounded-lg pl-5 pr-8 py-2.5">
            <IconAppleStore className="text-gray-100 stroke-gray-100 fill-gray-100 size-13" />
            <div className="flex flex-col">
              <p className="text-gray-100 text-sm">Download on the</p>
              <p className="text-2xl text-gray-100 font-bold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
