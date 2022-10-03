import React from 'react';
import Link from 'next/link';
import Product from '../models/Product';
import mongoose from 'mongoose';

const Mugs = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font w-[90%] mx-auto">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {!(JSON.stringify(products) === '{}') ?
              Object.keys(products).map((item) => (
                <Link key={products[item].slug} href={`products/${products[item].slug}`}>
                  <div className="lg:w-[calc(25%-16px)] md:w-[calc(50%-16px)] p-4 w-full mx-2 my-3 rounded-lg shadow-lg cursor-pointer">
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="h-[250px] block m-auto" src={products[item].img} />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-purple-500 text-xs tracking-widest title-font mb-1">Mug</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <div className="mt-1">
                        {products[item].size.map((size) => (
                          <span key={size} className='border border-gray-300 px-1 mx-1 text-sm rounded-sm' >{size.toUpperCase()}</span>
                        ))}
                      </div>
                      <div className="mt-1">
                        {products[item].color.map((clr) => (
                          <button key={clr} className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${clr == "black" ? "bg-black" : "bg-" + clr + "-600"}`}></button>
                        ))}
                      </div>
                      <p className="mt-1">₹ {products[item].price} </p>
                    </div>
                  </div>
                </Link>
              )) :
              <div className="outofstocks py-10">
                <p>Sorry All the Mugs are currently out of stock. New stock comming soon. Stay tuned.</p>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  // check and make connection with mongoose
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // find mug from products with help of catergory property
  const products = await Product.find({ category: 'mug' })

  // creating empty mugs object for storing mug with name as a key
  let mugs = {};

  // iterate every item of products for checking its color varient and add size
  for (let item of products) {
    // if same name mug already in mugs object then add its unique size and color
    // else create new key with mug name and add color and size
    if (item.title in mugs) {

      // if this item color is already not its varient and its available quantity is moreThan zero.
      if (!mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color);
      }

      // iterate size of array of item
      for (let size of item.size) {

        // check every size it's already added in mugs object size array
        if (!mugs[item.title].size.includes(size)) {
          mugs[item.title].size.push(size)
        }
      }

    }
    else {
      mugs[item.title] = JSON.parse(JSON.stringify(item));
      // if available quantity is more than zero than add it in mugs object
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color];
        mugs[item.title].size = item.size;
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) },
  }
}

export default Mugs