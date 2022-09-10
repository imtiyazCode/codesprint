import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';

const Checkout = ({ cart, addToCart, removeFromToCart, subTotal }) => {
  return (
    <div className='container m-auto w-[95%] my-8' >
      <h1 className='text-center my-8 font-bold text-3xl'>Checkout</h1>

      <h2 className='font-semibold text-xl mb-3'>1. Delhivery Details</h2>

      <div className="md:flex mx-auto my-2">
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>

      <div className="md:flex mx-auto my-2">
        <div className="md:w-full mb-2 px-2">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>

      <div className="md:flex mx-auto my-2">
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
          <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>

      <div className="md:flex mx-auto my-2">
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
          <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-full md:w-1/2 mb-2 px-2">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
          <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>

      <h2 className='font-semibold text-xl mt-10 mb-4'>2. Review Cart Items & Pay</h2>

      <div className='bg-purple-200 py-5 px-10 rounded-lg'>
        <div className="cartBody my-2">
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length === 0 && <div className='font-normal'>Your cart is Empty, please add few Items to Pay.</div>}
            {Object.keys(cart).map((k) => (
              <li key={k}>
                <div className="item flex items-center my-4 space-x-3">
                  <div className="itemName">{cart[k].name}- {cart[k].variant}/{cart[k].size}</div>
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
        </div>
      </div>

      <div className="mt-8">
        <button disabled={Object.keys(cart).length === 0} className="text-white bg-purple-600 border-0 py-2 px-5 focus:outline-none hover:bg-purple-800 rounded flex items-center">
          <FaShoppingBag className='my-auto mr-2' />
          Pay ₹ {subTotal}
        </button>
      </div>
    </div>
  )
}

export default Checkout