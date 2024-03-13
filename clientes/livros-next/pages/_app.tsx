import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/nav-bar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>
    
      <Component {...pageProps} />
    </>

  )
}
