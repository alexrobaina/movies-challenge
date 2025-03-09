// src/components/Navigation.tsx
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../Layout'
import { BaseButton } from '../common/BaseButton'
import { Footer } from '../Footer'
export const Navigation: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            Entertainment Hub
          </div>
          <div className="flex gap-4">
            <BaseButton variant="tertiary" text="login" onClick={() => {}} />
            <BaseButton variant="tertiary" text="register" onClick={() => {}} />
          </div>
        </div>
      </nav>
      <Layout>
        <main className="flex-grow">
          <Outlet />
        </main>
      </Layout>
      <Footer />
    </div>
  )
}
