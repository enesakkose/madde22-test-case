import React from 'react'
import Button from '@/components/Button'
import AddBtn from '@/components/AddBtn'
import EventCard from '@/components/EventCard'

type CategoryParamsTypes = {
  params: { category: string }
}

function Page({ params }: CategoryParamsTypes) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {params.category}
    <EventCard/>
    </div>
  )
}

export default Page