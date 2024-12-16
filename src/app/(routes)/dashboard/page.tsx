import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Header from './_components/Header'
import WorkspaceList from './_components/WorkspaceList'

function Dashboard() {
  return (
    <div>
      <Header />
      <WorkspaceList />
      {/* <UserButton /> */}
    </div>
  )
}

export default Dashboard