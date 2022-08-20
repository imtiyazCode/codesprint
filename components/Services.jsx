import React from 'react'
import { FaTshirt, FaMugHot, FaShippingFast } from 'react-icons/fa'
import { GiHoodie } from 'react-icons/gi'
import { TbBrandJavascript } from 'react-icons/tb'
import { IoIosCash } from 'react-icons/io';
import Link from 'next/link';

const HomeMain = () => {
    return (
        <section className="text-gray-600 body-font md:w-[85%] m-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Print and Wear the Code</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">wear whatever you want? what do you want? do you want code? so why not wear the code?</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Link href={"/tshirts"}>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                    <FaTshirt />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Coding T-shirts</h2>
                                <p className="leading-relaxed text-base">Codesprint has trendy geek tShirts for coders, programmers, devops , sysadmin , testers.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/hoodies"}>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                    <GiHoodie />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Coding Hoodies</h2>
                                <p className="leading-relaxed text-base">Codesprint has trendy geek Hoodies for coders, programmers, devops , sysadmin , testers.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/mugs"}>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                    <FaMugHot />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Coding Mugs</h2>
                                <p className="leading-relaxed text-base">Codesprint has trendy geek Mugs for coders, programmers, devops , sysadmin , testers.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/stickers"}>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                    <TbBrandJavascript />
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Coding Stickers</h2>
                                <p className="leading-relaxed text-base">Codesprint has trendy geek Stickers for coders, programmers, devops , sysadmin , testers.</p>
                            </div>
                        </div>
                    </Link>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                <FaShippingFast />
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Free Shipping</h2>
                            <p className="leading-relaxed text-base">Codesprint ship all over India for FREE on tShirts, Hoodies, Mugs and Stickers.</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg hover:bg-purple-200 cursor-pointer">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-4">
                                <IoIosCash />
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Exciting Offers</h2>
                            <p className="leading-relaxed text-base">Codesprint has provide amazing offers & discounts on our products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeMain