import { useState } from 'react';
import mongoose from 'mongoose';
import Product from '../../models/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const slug = ({ buyNow, addToCart, product, varients }) => {

    const [color, setColor] = useState(product.color);
    const [size, setSize] = useState(product.size[0]);

    const [pin, setPin] = useState()
    const [serviceable, setServiceable] = useState()

    const notifyAddCart = () => {
        toast.success('Your Product is added to Cart!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const onChangePin = (e) => {
        setPin(e.target.value)
    }

    const checkServiseablity = async () => {
        let pins = await fetch("http://localhost:3000/api/pincode");
        let pinJson = await pins.json()

        if (pinJson.includes(pin)) {
            setServiceable(true)
            toast.success('Yay! This pincode is Serviceable', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setServiceable(false)
            toast.error('Sorry! we do not deliver to this pincode yet', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const refreshVarient = (e, varCol) => {
        let url = `http://localhost:3000/products/${varients[varCol].slug}`
        setColor(varCol);
        window.location = url;
    }

    return <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
        <div className="container px-5 py-16 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full px-3 sm:px-12 md:w-2/3 mx-auto lg:h-auto lg:px-0 object-cover object-top rounded" src={product.img} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESPRINT</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} - ({product.category === "sticker" ? "": `${product.color} / `}{size})</h1>
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                    </div>
                    <p className="leading-relaxed">{product.desc}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        {!(product.category === "sticker") && <div className="flex items-center mr-6">
                            <span className="mr-3">Color</span>
                            {Object.keys(varients).map((varCol) => (
                                <button onClick={(e) => { refreshVarient(e, varCol) }} key={varCol} className={`border-2 ml-1 rounded-full focus:outline-none ${varCol == "black" ? "bg-black" : "bg-" + varCol + "-600"} ${varCol == product.color ? "border-purple-600 w-7 h-7" : "border-gray-300 w-6 h-6"}`}></button>
                            ))}
                        </div>
                        }
                        <div className="flex items-center">
                            <span className="mr-3">Size</span>
                            <div className="relative">
                                <select onChange={(e) => { setSize(e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                    {product.size.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
                        <button onClick={() => { addToCart(product.slug, 1, product.price, product.title, size, product.color); notifyAddCart() }} className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-3 md:px-6 focus:outline-none hover:bg-purple-600 rounded">Add To Cart</button>
                        <button onClick={() => buyNow(product.slug, 1, product.price, product.title, size, product.color)} className="flex ml-3 md:ml-5 text-white bg-purple-600 border-0 py-2 px-3 md:px-6 focus:outline-none hover:bg-purple-700 rounded">Buy Now</button>
                    </div>
                    <div className="checkPin flex space-x-2 mt-6 text-sm">
                        <input onChange={onChangePin} className='px-2 py-1 border-2 border-gray-400 rounded' type="number" placeholder='Enter Your Pincode' />
                        <button onClick={checkServiseablity} className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Check</button>
                    </div>
                    {serviceable && <div className='mt-3 text-sm text-green-700'>Yay! This pincode is Serviceable</div>}
                    {serviceable != null && !serviceable && <div className='mt-3 text-sm text-red-700'>Sorry! we do not deliver to this pincode yet</div>}
                </div>
            </div>
        </div>
    </section>
}

export async function getServerSideProps(context) {

    // check and make connection with mongoose
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }

    let product = await Product.findOne({ slug: context.query.slug });
    let varients = await Product.find({ title: product.title })

    let colorSizeSlug = {};

    for (let item of varients) {
        colorSizeSlug[item.color] = {}
        colorSizeSlug[item.color]["size"] = item.size;
        colorSizeSlug[item.color]["slug"] = item.slug;
    }

    return {
        props: { product: JSON.parse(JSON.stringify(product)), varients: JSON.parse(JSON.stringify(colorSizeSlug)) },
    }
}

export default slug