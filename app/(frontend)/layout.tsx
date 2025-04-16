import React, { ReactNode } from 'react'
import Navbar from "@/components/Navbar";
import { getServerSession, User } from "next-auth";

export default async function Layout({children}:{children:ReactNode}) {
    const session = await getServerSession()
    const user=session?.user
  return (
    <div>
        <div className='fixed top-0 right-0 left-0 z-50 shadow'>
          <Navbar user={user as User}/>
        </div>
            {children}
    </div>
  )
}