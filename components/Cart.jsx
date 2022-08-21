import React from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'

const Cart = ({ handleSideToggle }) => {

  return (
    <div className='bg-purple-200 max-w-[24rem] h-full p-10 rounded-b-lg'>
      <div className="cartHead my-2">
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span className='absolute top-5 right-5 text-2xl cursor-pointer text-purple-700' onClick={handleSideToggle} ><AiFillCloseCircle /></span>
      </div>
      <div className="cartBody my-5">
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex items-center my-4 space-x-3">
              <div className="itemName">Tshirt - Print and Wear the code</div>
              <div className="itemCounter flex space-x-2 items-center text-lg">
                <AiOutlineMinusCircle className='cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex items-center my-4 space-x-3">
              <div className="itemName">Tshirt - Print and Wear the code fsdhjf</div>
              <div className="itemCounter flex space-x-2 items-center text-lg">
                <AiOutlineMinusCircle className='cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex items-center my-4 space-x-3">
              <div className="itemName">Tshirt - Print and Wear the code fjhsd</div>
              <div className="itemCounter flex space-x-2 items-center text-lg">
                <AiOutlineMinusCircle className='cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex items-center my-4 space-x-3">
              <div className="itemName">Tshirt - Print and Wear the code asidf</div>
              <div className="itemCounter flex space-x-2 items-center text-lg">
                <AiOutlineMinusCircle className='cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex items-center my-4 space-x-3">
              <div className="itemName">Tshirt - Print and Wear the code asdifgfbd idshf</div>
              <div className="itemCounter flex space-x-2 items-center text-lg">
                <AiOutlineMinusCircle className='cursor-pointer' />
                <span>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
        </ol>
        <div className="action flex space-x-3 mt-12 w-full justify-between">
          <button className="text-purple-700 bg-purple-100 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 hover:text-white rounded flex items-center">
            <BsFillTrashFill className='my-auto mr-2' />
            Clear Cart
          </button>
          <button className="text-white bg-purple-600 border-0 py-2 px-5 focus:outline-none hover:bg-purple-800 rounded flex items-center">
            <FaShoppingBag className='my-auto mr-2' />
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart