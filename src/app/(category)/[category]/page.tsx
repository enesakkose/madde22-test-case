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
  const categoryEvents = params?.category !== 'etkinlikler'
    ? EVENTS.filter(event => event.genre.replace(/\s/g, '').toLocaleLowerCase () === params.category) 
    : EVENTS 
  //categoreEvents variables created for edit mock EVENTS data by category genre
  if(categoryEvents.length === 0) return <NoData/>

  return (
    <MainContainer className={styles.categoryPage}>
      {categoryEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </MainContainer>
  )
}

export default Page
