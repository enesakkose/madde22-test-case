import React from 'react'
import EventCard from '@/components/EventCard'
import MainContainer from '@/containers/MainContainer.tsx'
import NoData from '@/components/NoData'
import { EVENTS } from '@/mock'
import styles from './Category.module.scss'

type CategoryParamsTypes = {
  params: { category: string }
}

function Page({ params }: CategoryParamsTypes) {
  const categoryEvents = params?.category?.[0] 
    ? EVENTS.filter(event => event.genre.replace(/\s/g, '').toLocaleLowerCase () === params.category [0]) 
    : EVENTS 
  //categoreEvents variables created for edit mock EVENTS data by category genre
  


  return (
    <MainContainer className={styles.categoryPage}>
      {EVENTS.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </MainContainer>
  )
}

export default Page
