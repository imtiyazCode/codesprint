import React from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import { BsFillTrashFill } from 'react-icons/bs';
import Link from 'next/link';

const Cart = ({ cart, addToCart, removeFromToCart, clearCart, subTotal, handleSideToggle }) => {

  return (
    <div className='bg-purple-200 max-w-[24rem] h-full p-10 rounded-b-lg'>
      <div className="cartHead my-2">
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span className='absolute top-5 right-5 text-2xl cursor-pointer text-purple-700' onClick={handleSideToggle} ><AiFillCloseCircle /></span>
      </div>
      <div className="cartBody my-5">
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length === 0 && <div className='font-normal'>Your cart is Empty, please add few Items to checkout.</div>}
          {Object.keys(cart).map((k) => (
            <li key={k}>
              <div className="item flex items-center my-4 space-x-3">
                <div className="itemName">{cart[k].name} - {cart[k].variant}/{cart[k].size}</div>
                <div className="itemCounter flex space-x-2 items-center text-lg">
                  <AiOutlineMinusCircle className='cursor-pointer' onClick={() => removeFromToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
                  <span>{cart[k].qty}</span>
                  <AiOutlinePlusCircle className='cursor-pointer' onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <h2 className='text-base font-bold mt-1'>Subtotal : ₹{subTotal}</h2>
        <div className="action flex space-x-3 mt-12 w-full justify-between">
          <button disabled={Object.keys(cart).length === 0} onClick={clearCart} className="text-purple-700 bg-purple-100 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 hover:text-white rounded flex items-center">
            <BsFillTrashFill className='my-auto mr-2' />
            Clear Cart
          </button>
          <Link href="/checkout" ><button onClick={handleSideToggle} disabled={Object.keys(cart).length === 0} className="text-white bg-purple-600 border-0 py-2 px-5 focus:outline-none hover:bg-purple-800 rounded flex items-center">
            <FaShoppingBag className='my-auto mr-2' />
            Checkout
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart