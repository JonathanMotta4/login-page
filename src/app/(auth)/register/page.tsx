import Image from 'next/image'
import { RegisterForm } from '@/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="flex justify-between w-full h-screen    dark:bg-slate-900 gap-5 bg-slate-200 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col w-full h-full md:w-2/4 px-8  py-4 ">
        <div className="flex items-center gap-2 mb-10">
          <Image
            src="/Logo.png"
            alt="asda"
            width={32}
            height={40}
            className="rounded-3xl"
          />
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Logo
          </h2>
        </div>
        <h1 className="text-3xl">Welcome to ExploreMe 👋</h1>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Kindly fill your details below to create an account
        </span>
        <RegisterForm />
      </div>
      <Image
        src="/signUpImage.png"
        width={700}
        height={964}
        className="hidden sm:bl md:block md:w-auto flex-1 "
        alt="Sign up Image"
      />
    </div>
  )
}

export default RegisterPage
