"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'



const SignIn = () => {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='flex justify-center flex-col min-h-screen w-full items-center bg-[#ddfafe]'>
       {/* <Image
                        alt="doctor"
                        width={100}
                        height={100}
                        objectFit='contain'
                        src="/image/logo2.png"
                        className='xl:h-[190px] xl:w-[264px] '
                    />  */}
      <div className=' items-center flex flex-col max-w-full w-[19rem] xl:w-[25rem] lg:w-[25rem]  bg-white rounded-sm justify-center  p-10 pl-2 pr-2  shadow-lg'>
      <div className='flex flex-col gap-1  pb-3 '>
        <div>
          <h1 className='text-lg text-blue-400'>Hopeview hospital</h1>

        </div>
        <div>
          <p className='text-lg'>Get Better Care For Your <span className='text-red-500'>Health</span></p>
        </div>
        <div>
       
        </div>
      </div>
      <div className='flex gap-5 items-center pb-4'>
      {/* <Image
                        alt="doctor"
                        width={100}
                        height={100}
                        objectFit='contain'
                        src="/image/doctors.jpg"
                        className='xl:h-[190px] xl:w-[264px] '
                    /> */}
                    <div>
                      <form className=' flex flex-col gap-8' action="">
                      <Input className='lg:w-[20rem] xl:w-[20rem] w-[16rem]' type="email" placeholder="Username" />
                      <Input type="text" placeholder="Password" />
                      <Button className='text-sm font-bold' variant="light"
                      disabled={isLoading}
                      >
                        {isLoading ? "Login" : "Login"}
                      </Button>

                      <div className="text-center mt-4">
                        <Link href="/register/forgot-password" className="text-sm text-[#16c2d5] hover:underline">
                          Forgot Password?
                        </Link>
                      </div>


                      </form>
                    </div>
      </div>

      </div>
  
      
    </div>
  )
}

export default SignIn
