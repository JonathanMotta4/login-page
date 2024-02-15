import { GoogleLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="email">Email Address*</label>
      <input
        type="email"
        name="email"
        id="email"
        className="py-1 px-2 rounded-md dark:bg-slate-900 border dark:border-slate-100 placeholder:text-slate-400"
        placeholder="Enter your email address"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="py-1 px-2 rounded-md dark:bg-slate-900 border dark:border-slate-100 placeholder:text-slate-400"
        placeholder="Enter your password"
      />
      <div className="flex gap-2">
        <input
          type="checkbox"
          name="acceptTerms"
          id="acceptTerms"
          className=" w-4 "
        />
        <label htmlFor="acceptTerms">I agree to terms & conditions </label>
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-violet-600 hover:bg-violet-500 transition-colors rounded-md"
      >
        Login
      </button>
      <div className="text-center my-2 flex items-center gap-2">
        <div className="h-px w-full border dark:border-slate-400 rounded-md"></div>
        <span>or</span>
        <div className="h-px w-full border dark:border-slate-400 rounded-md"></div>
      </div>
      <button className="w-full p-3 bg-slate-950 text-slate-200 rounded-md flex gap-4 items-center justify-center hover:bg-slate-800 transition-colors">
        <GoogleLogo weight={'bold'} className="w-8 h-8 " />
        Login with Google
      </button>
      <span>
        Don´t have a account?{' '}
        <Link href={'/register'} className="underline mx-1">
          Register
        </Link>
      </span>
    </form>
  )
}

export default LoginForm
