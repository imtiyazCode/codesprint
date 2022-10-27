import Image from "next/image"
import Link from "next/link"
import { BiCartAlt } from 'react-icons/bi'
import Cart from './Cart'
import { useRef } from "react"
import { RiAccountCircleFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ cart, user, addToCart, removeFromToCart, clearCart, subTotal, logout }) => {

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

    const notifyClrCart = () => {
        toast.info('Your Cart is cleared', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between py-2 px-3 items-center shadow-md overflow-x-hidden">
            <div className="logo cursor-pointer">
                <Link href="/">
                    <a><Image src={"/codesprintlogo.png"} width={200} height={45} /></a>
                </Link>
            </div>
            <nav className="nav align-middle text-[#33384d] font-bold" >
                <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 ">
                    <Link href={"/hoodies"} ><a><li className="px-2 py-3 cursor-pointer hover:text-purple-700" >Hoodies</li></a></Link>
                    <Link href={"/tshirts"} ><a><li className="px-2 py-3 cursor-pointer hover:text-purple-700" >TShirts</li></a></Link>
                    <Link href={"/mugs"} ><a><li className="px-2 py-3 cursor-pointer hover:text-purple-700" >Mugs</li></a></Link>
                    <Link href={"/stickers"}><a><li className="px-2 py-3 cursor-pointer hover:text-purple-700" >Stickers</li></a></Link>
                </ul>
            </nav>
            <div className="cta align-middle text-[#33384d] font-bold">
                {
                    user.value == null ? (
                        <Link href={"/login"}><button className="px-2 py-3 text-2xl" ><RiAccountCircleFill /></button></Link>
                    ) : (
                        <span className="dropdown">
                            <button className="px-2 py-3 text-2xl" ><RiAccountCircleFill /></button>
                            <div className="dropdown-menu absolute hidden bg-white right-12 rounded-md top-14">
                                <ul className="menu">
                                    <Link href={"/account"}><a><li className="account py-2 px-5 hover:bg-purple-600 hover:text-white rounded-t-md">Account</li></a></Link>
                                    <Link href={"/order"}><a><li className="py-2 px-5 hover:bg-purple-600 hover:text-white">Order</li></a></Link>
                                    <li className="logout py-2 px-5 hover:bg-purple-600 hover:text-white rounded-b-md cursor-pointer" onClick={logout}> Logout</li>
                                </ul>
                            </div>
                        </span>
                    )
                }
                <button className="px-2 py-3 text-2xl" onClick={handleSideToggle} ><BiCartAlt /></button>
            </div>
            <div ref={ref} className="cartBar absolute top-0 right-0 h-full transform transition-transform translate-x-full z-20 ">
                <ToastContainer />
                <Cart cart={cart} addToCart={addToCart} clearCart={() => { clearCart(); notifyClrCart() }} removeFromToCart={removeFromToCart} subTotal={subTotal} handleSideToggle={handleSideToggle} />
            </div>
        </div>
    )
}

export default Navbar