'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavCollapse from './navCollapse'
import { User } from 'next-auth'

export default function Navbar({user}:{user:User}) {
  return (
    <nav className='bg-white px-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <Image src="/hd-total-energies-logo-transparent-png-701751694714035bjuuffwgkn-removebg-preview.png" alt='' width={500} height={500}
            className='w-20'
            />
            <p className='text-red-500 font-bold'>TotalEnergies Uganda</p>
        </div>
        <div className='lg:hidden'>
            <NavCollapse/>
        </div>
        <div className='hidden lg:flex items-center gap-10 text-[16px] leading-[24px] font-medium text-[#374649] not-italic'>
            <Link href="">Products & Services</Link>
            <Link href="">TotalEnergies in Uganda MS & EP</Link>
            <Link href="">Projects</Link>
            <Link href="">Sustainability</Link>
            <Link href="">Renewables</Link>
            <Link href="">Aviation</Link>
            <Link href="">Careers</Link>
            {
              user?(
                <Link href='/auth/login' className=' bg-black text-white p-2 px-6 rounded-md'>Dashboard</Link>
              ):(
                <Link href='/dashboard' className='bg-black text-white p-2 px-6 rounded-md'>Login</Link>
              )
            }
        </div>
    </nav>
  )
}
