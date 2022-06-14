import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className="min-h-[calc(100vh-165px)] pt-16 px-2 sm:px-4">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
