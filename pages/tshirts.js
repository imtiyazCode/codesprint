import React from 'react';
import Link from 'next/link';
import Product from '../models/Product';
import mongoose from 'mongoose';

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font w-[90%] mx-auto">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => (
              <Link key={item._id} href={`products/${item.slug}`}>
                <div className="lg:w-[calc(25%-16px)] md:w-[calc(50%-16px)] p-4 w-full mx-2 my-3 rounded-lg shadow-lg cursor-pointer">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[250px] block m-auto" src={item.img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-purple-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">₹ {item.price} <span className='line-through'>{item.price * 1.3}</span></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const products = await Product.find({category:'tshirt'})
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}

export default Tshirts