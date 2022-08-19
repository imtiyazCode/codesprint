import React from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Cart = ({ handleSideToggle }) => {

  return (
    <div className='bg-[#bccbff] max-w-[24rem] h-full p-10 rounded-b-lg'>
      <div className="cartHead my-2">
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span className='absolute top-5 right-5 text-2xl cursor-pointer text-[#33384d]' onClick={handleSideToggle} ><AiFillCloseCircle /></span>
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
        <button class="mt-4 text-white bg-[#3a4058] border-0 py-2 px-8 focus:outline-none hover:bg-[#33384d] rounded text-lg">Checkout</button>
      </div>
    </div>
  )
}

export default Cart