import React from 'react';
import Link from 'next/link';
import Product from '../models/Product';
import mongoose from 'mongoose';

const Stickers = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font w-[90%] mx-auto">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {Object.keys(products).map((item) => (
              <Link key={products[item].slug} href={`products/${products[item].slug}`}>
                <div className="lg:w-[calc(25%-16px)] md:w-[calc(50%-16px)] p-4 w-full mx-2 my-3 rounded-lg shadow-lg cursor-pointer">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[250px] block m-auto" src={products[item].img} />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-purple-500 text-xs tracking-widest title-font mb-1">Sticker</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <div className="mt-1">
                      {products[item].size.map((size) => (
                        <span key={size} className='border border-gray-300 px-1 mx-1 text-sm rounded-sm' >{size.toUpperCase()}</span>
                      ))}
                    </div>
                    <p className="mt-1">₹ {products[item].price} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section></div>
  )
}

export async function getServerSideProps(context) {

  // check and make connection with mongoose
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // find sticker from products with help of catergory property
  const products = await Product.find({ category: 'sticker' })

  // creating empty stickers object for storing sticker with name as a key
  let stickers = {};

  // iterate every item of products for checking its color varient and add size
  for (let item of products) {
    // if same name sticker already in stickers object then add its unique size and color
    // else create new key with sticker name and add color and size
    if (item.title in stickers) {

      // if this item color is already not its varient and its available quantity is moreThan zero.
      if (!stickers[item.title].color.includes(item.color) && item.availableQty > 0) {
        stickers[item.title].color.push(item.color);
      }

      // iterate size of array of item
      for (let size of item.size) {

        // check every size it's already added in stickers object size array
        if (!stickers[item.title].size.includes(size)) {
          stickers[item.title].size.push(size)
        }
      }

    }
    else {
      stickers[item.title] = JSON.parse(JSON.stringify(item));
      // if available quantity is more than zero than add it in stickers object
      if (item.availableQty > 0) {
        stickers[item.title].color = [item.color];
        stickers[item.title].size = item.size;
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(stickers)) },
  }
}

export default Stickers