import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillLock } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    } else if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else if (e.target.name == 'phone') {
      setNumber(e.target.value)
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const notifySignup = () => {
    toast.success('You are successfully Signup!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const notifySignupFail = () => {
    toast.error('Something went wrong!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, number, password };
    let data = await fetch("http://localhost:3000/api/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    let res = await data.json()
    if (res.success) {
      notifySignup();
      localStorage.setItem('token', res.token);
      setTimeout(() => {
        router.push('http://localhost:3000/');
      }, 1500);
    } else {
      notifySignupFail()
    }

    setName('')
    setEmail('')
    setNumber('')
    setPassword('')
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full space-y-8 mb-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="logo" />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign Up for an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={'/login'}>
              <a className="font-medium text-purple-600 hover:text-purple-500"> Sign In </a>
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-10 rounded-lg shadow" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="name" className="">Name</label>
              <input onChange={handleChange} id="name" name="name" type="text" autoComplete="name" required value={name}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
            <div>
              <label htmlFor="email-address" className="">Email address</label>
              <input onChange={handleChange} id="email-address" name="email" type="email" value={email} required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
            <div>
              <label htmlFor="phone" className="">Mobile Number</label>
              <input onChange={handleChange} id="phone" name="phone" type="number" value={number} autoComplete="phone"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
            <div>
              <label htmlFor="password" className="">Password</label>
              <input onChange={handleChange} id="password" name="password" type="password" value={password} autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <AiFillLock className="h-5 w-5 text-purple-500 group-hover:text-purple-400" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup