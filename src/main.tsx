import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BaseLoading } from './components/common/BaseLoading'
import { App } from './App'

const queryClient = new QueryClient()

async function main() {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={<BaseLoading lg />}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Suspense>,
  )
}

void main()
