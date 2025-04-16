import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function Layout({children}:{children:ReactNode}) {
  const session = await getServerSession()
  if(!session){
    redirect("/auth/login")
  }
  return (
    <div>
      {children}
    </div>
  )
}
