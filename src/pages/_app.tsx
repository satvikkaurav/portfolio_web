import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ThemeProvider } from '@/components/ThemeProvider'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        {isLoading ? <Loading /> : <Component {...pageProps} />}
      </ThemeProvider>
    </ErrorBoundary>
  )
}
