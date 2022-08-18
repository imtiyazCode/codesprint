import Image from "next/image"
import Link from "next/link"
import {BiCartAlt} from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between py-2 px-3 items-center">
            <div className="logo cursor-pointer">
                <Link href="/">
                    <Image src={"/codesprintlogo.png"} width={200} height={45} />
                </Link>
            </div>
            <nav className="nav align-middle text-[#33384d] font-bold" >
                <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 ">
                    <Link href={"/hoodies"} ><a><li className="px-2 py-3 cursor-pointer" >Hoodies</li></a></Link>
                    <Link href={"/tshirts"} ><a><li className="px-2 py-3 cursor-pointer" >TShirts</li></a></Link>
                    <Link href={"/mugs"} ><a><li className="px-2 py-3 cursor-pointer" >Mugs</li></a></Link>
                    <Link href={"/stickers"}><a><li className="px-2 py-3 cursor-pointer" >Stickers</li></a></Link>
                </ul>
            </nav>
            {/* <div className="logo cursor-pointer flex flex-col md:flex-row md:space-x-12 ">
                <Link href="/">
                    <Image src={"/codesprintlogo.png"} className="h-fit" width={200} height={45} />
                </Link>
                <nav className="nav align-middle text-[#33384d] font-bold" >
                    <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 ">
                        <Link href={"/hoodies"} ><a><li className="px-2 py-3 cursor-pointer" >Hoodies</li></a></Link>
                        <Link href={"/tshirts"} ><a><li className="px-2 py-3 cursor-pointer" >TShirts</li></a></Link>
                        <Link href={"/mugs"} ><a><li className="px-2 py-3 cursor-pointer" >Mugs</li></a></Link>
                        <Link href={"/stickers"}><a><li className="px-2 py-3 cursor-pointer" >Stickers</li></a></Link>
                    </ul>
                </nav>
            </div> */}
            <div className="cta align-middle text-[#33384d] font-bold">
                <button className="mx-3 px-2 py-3 text-2xl" ><BiCartAlt /></button>
            </div>
        </div>
    )
}

export default Navbar