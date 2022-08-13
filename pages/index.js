import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Codesprint</title>
        <meta name="description" content="Codesprint - Print And Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <img src="/banner.png" alt="banner" className="w-full" />
      </main>
      <Footer />
    </div>
  )
}
