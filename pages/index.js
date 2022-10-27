import Head from 'next/head';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa'
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Codesprint</title>
        <meta name="description" content="Codesprint - Print And Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='font-poppins'>
        <div className="banner bg-purple-500 w-full h-fit py-7 md:py-0 md:h-[500px] flex items-center justify-center">
          <div className="innerBanner bg-purple-700 w-[90%] m-auto h-fit py-8 md:py-0 sm:h-[80%] md:h-[65%] lg:h-[75%] rounded-[10px] md:pl-[70px] md:flex md:justify-between">
            <div className="headerText flex items-center justify-center md:items-start flex-col md:space-y-6">
              <h1 className='text-[55px] sm:text-[75px] md:text-[70px] lg:text-[9vw] xl:text-[117px] font-extrabold text-white leading-[129px]' >
                Codesprint
              </h1>
              <Link href="#services">
                <button className=' bg-white py-2 px-4 md:py-[12px] md:px-[20px] lg:py-[14px] lg:px-[24px] rounded-[42px] font-medium flex md:font-medium items-start md:text-[20px] text-purple-700 hover:bg-purple-500 hover:text-white'>
                  SHOP NOW
                  <FaShoppingBag className='my-auto ml-4' />
                </button>
              </Link>
            </div>
            <div className="imgWrapper hidden md:block md:min-h-full overflow-hidden">
              <img src="/bannerPng.png" className='h-4 md:h-full' />
            </div>
          </div>
        </div>
        <Services />
      </main>
    </>
  )
}
