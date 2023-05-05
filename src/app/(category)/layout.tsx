import React from 'react'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import StickyHeader from '@/components/StickyHeader'

type CategoryLayoutPropsTypes = {
  children: React.ReactNode
  params: { category: string }
}

function CategoryLayout({ children, params}: CategoryLayoutPropsTypes) {
  console.log(params.category)
  return (
    <>
    <TopBar title={params.category}/>
    <Header/>
    <StickyHeader/>
    {children}
    </>
  )
}

export default CategoryLayout