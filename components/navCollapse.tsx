import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function NavCollapse() {
  return (
    <Sheet>
  <SheetTrigger><Menu size={30}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <div className='flex flex-col gap-4 text-[16px] leading-[24px] font-medium text-[#374649] not-italic'>
            <Link href="">Products & Services</Link>
            <Link href="">TotalEnergies in Uganda MS & EP</Link>
            <Link href="">Projects</Link>
            <Link href="">Sustainability</Link>
            <Link href="">Renewables</Link>
            <Link href="">Aviation</Link>
            <Link href="">Careers</Link>
        </div>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}
