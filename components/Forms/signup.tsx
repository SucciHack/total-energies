'use client'
import Image from "next/image"
import Link from "next/link"
import { Mail, Eye, EyeOff, CircleUser, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"

type signUpInputs = {
    name: string
    email: string
    password: string
  }

export default function SignUpPage() {
    const [loading,setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<signUpInputs>()

    async function onSubmit(data:signUpInputs){
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        try {
            setLoading(true)
            const response = await fetch(`${baseUrl}/api/v1/users`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(response.status === 201){
              toast.success("Success", {
                description: "User created successfully",
              })
            }
            if(response.status === 409){
              toast.error("Error", {
                description: "User already Exists",
              })
            }
            if(response.status === 500){
              toast.error("Error", {
                description: "Something went wrong",
              })
            }
            console.log(response)
            reset()
  
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
     }
  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Login Form */}
      <div className="relative flex w-full flex-col items-start justify-center bg-white p-8 lg:w-1/2">
        <div className="absolute left-8 top-8 flex items-center">
          <div className="mr-3 ">
          <Image src="/hd-total-energies-logo-transparent-png-701751694714035bjuuffwgkn-removebg-preview.png" alt="" className="text-xl font-bold w-[100px]" width={500} height={500}/>
          </div>
          <div>
            <span className="text-red-600">Total Energies</span>
            <p className="text-xs text-gray-500">Powering Progress, Energizing Tomorrow</p>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="z-10 mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="mt-2 text-gray-600">
              Welcome Back to <span className="text-red-600">Inventory Pro</span>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Fullname
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <CircleUser className="h-5 w-5 text-gray-400"/>
                </div>
                <input
                {...register("name", { required: true })}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="E.g John Doe"
                  className="block w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  className="block w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm font-medium text-red-600 hover:text-red-500">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EyeOff className="h-5 w-5 text-gray-400" />
                </div>
                <input
                {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  className="block w-full rounded border border-gray-300 py-3 pl-10 pr-10 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Eye className="h-5 w-5 text-gray-400" />
                </button>
                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
            </div>

            <div>
                {
                    loading ?(
                <button
                    type="submit"
                    className="w-full rounded bg-red-600 py-3 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                >
                    <Loader2 className="animate-spin"/>  Creating account....
                </button>
                ):(
                <button
                    type="submit"
                    className="w-full rounded bg-red-600 py-3 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Sign Up
                </button>
                
                )
                }
            </div>
          </form>

          <div className="text-center text-sm">
            Already a Registered User?{" "}
            <Link href="/auth/login" className="font-medium text-red-600 hover:text-red-500">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <Image
          src="/expert-looks-online-new-air-filters.jpg?height=1080&width=1920"
          alt="Inventory warehouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-16  text-white flex flex-col items-center w-full">
          <h3 className="text-3xl font-bold">Effortless Inventory Tracking,</h3>
          <p className="mt-2 text-lg">Real-time Stock Updates at Your Fingertips</p>
        </div>
      </div>
    </div>
  )
}
