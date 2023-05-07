import React from 'react'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import StickyHeader from '@/components/StickyHeader'

type CategoryLayoutPropsTypes = {
  children: React.ReactNode
}

function CategoryLayout({ children }: CategoryLayoutPropsTypes) {
  return (
    <>
      <TopBar />
      <Header />
      <StickyHeader />
      {children}
    </>
  )
}

export default CategoryLayout
