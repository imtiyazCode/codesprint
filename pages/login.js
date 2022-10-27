import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { AiFillLock } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  

  const notifyLogin = () => {
    toast.success('You are successfully logged in!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const notifyLoginIncorrect = () => {
    toast.error('Email or Password is Invalid', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const notifyLoginFail = () => {
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

    const formData = { email, password }

    const data = await fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })

    let res = await data.json()

    if (res.success) {
      notifyLogin()
      localStorage.setItem('token', res.token);
      setTimeout(() => {
        router.push('http://localhost:3000/');
      }, 1500);
    } else if (data.status == 400) {
      notifyLoginIncorrect();
    } else {
      notifyLoginFail()
    }

  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full space-y-8 mb-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="logo" />
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={'/signup'}>
              <a className="font-medium text-purple-600 hover:text-purple-500"> Signup </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6 bg-white p-10 rounded-lg shadow" onSubmit={handleSubmit} method="POST">
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="email-address" className="lable">Email address</label>
              <input id="email-address" name="email" value={email} type="email" onChange={handleChange} required autoComplete='username'
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
            <div>
              <label htmlFor="password" className="lable">Password</label>
              <input id="password" name="password" value={password} type="password" onChange={handleChange} autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={"/forgotPassword"}>
                <a className="font-medium text-purple-600 hover:text-purple-500"> Forgot your password? </a>
              </Link>
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

export default Login