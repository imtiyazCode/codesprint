import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <footer className="text-[gray-600] bg-[#f3f4f6] body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href={"/"}>
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <img src="/codesprintlogo.png" alt="" />
                            </a>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500 px-3">Print and wear the &lt;code/&gt; - Premium tShirts, hoodies and many more..</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                            <div className="testing_colors">
                                <div className="bg-blue-600"></div>
                                <div className="bg-pink-600"></div>
                                <div className="bg-red-600"></div>
                                <div className="bg-yellow-600"></div>
                                <div className="bg-green-600"></div>
                            </div>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/hoodies"><a className="text-gray-600 hover:text-gray-800">Hoodies</a></Link>
                                </li>
                                <li>
                                    <Link href="/tshirts"><a className="text-gray-600 hover:text-gray-800">T-Shirts</a></Link>
                                </li>
                                <li>
                                    <Link href="/mugs"><a className="text-gray-600 hover:text-gray-800">Mug</a></Link>
                                </li>
                                <li>
                                    <Link href="/stickers"><a className="text-gray-600 hover:text-gray-800">Stickers</a></Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER SERVICE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">About Us</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Return Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICY</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Image src={"/pay.png"} width={400} height={169}/>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 CodeClash —
                            <a href="https://instagram.com/code.clash" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@code.clash</a>
                            - All right reserved
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer></div>
    )
}

export default Footer