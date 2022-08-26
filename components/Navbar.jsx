import Image from "next/image"
import Link from "next/link"
import { BiCartAlt } from 'react-icons/bi'
import Cart from './Cart'
import { useRef, forwardRef } from "react"

const Navbar = ({cart, addToCart, removeFromToCart, clearCart, subTotal}) => {

    const ref = useRef()

    const handleSideToggle = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0')
        }
        else {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between py-2 px-3 items-center shadow-md overflow-x-hidden">
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
            <div className="cta align-middle text-[#33384d] font-bold">
                <button className="mx-3 px-2 py-3 text-2xl" onClick={handleSideToggle} ><BiCartAlt /></button>
            </div>
            <div ref={ref} className="cartBar absolute top-0 right-0 h-full transform transition-transform translate-x-full z-20 ">
                <Cart cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromToCart={removeFromToCart} subTotal={subTotal} handleSideToggle={handleSideToggle} />
            </div>
        </div>
    )
}

export default Navbar