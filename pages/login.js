import React from 'react'
import Link from 'next/link'
import { AiFillLock } from 'react-icons/ai'

const Login = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-md w-full space-y-8">
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
        <form className="mt-8 space-y-6 bg-white p-10 rounded-lg shadow" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label for="email-address" className="">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
            <div>
              <label for="password" className="">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm my-1" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
            </div>

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