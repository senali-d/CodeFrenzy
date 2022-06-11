import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col">
        <Header />
        <div className="min-h-[calc(100vh-225px)]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
