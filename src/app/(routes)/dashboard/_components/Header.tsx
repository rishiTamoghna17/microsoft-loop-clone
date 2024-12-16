'use client'
import Logo from '@/app/_components/Logo'
import { OrganizationSwitcher, UserButton,useAuth } from '@clerk/nextjs'
import React from 'react'

function Header() {
    const {orgId} = useAuth()
    console.log(orgId)
  return (
    <div className='flex items-center justify-between p-3 shadow-sm'>
        <Logo/>
        <OrganizationSwitcher afterCreateOrganizationUrl={'/dashboard'} afterLeaveOrganizationUrl={'/dashboard'}/>
        <UserButton />
    </div>
  )
}

export default Header