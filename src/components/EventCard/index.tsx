import React from 'react'
import EventImage from './EventImage'
import EventInfo from './EventInfo'
import ActionBtns from './ActionBtns'
import type { EVENT } from '@/types'
import styles from './EventCard.module.scss'

function EventCard({ event }: { event: EVENT }) {
  return (
    <div className={styles.eventCard}>
      <EventImage
        genreColor={event.genreColor}
        image={event.image}
        date={event.date}
        genre={event.genre}
      />
      <EventInfo
        className={styles.title} //for hover effect
        title={event.title}
        info={event.info}
        location={event.location}
      />
      <ActionBtns id={event.id} />
    </div>
  )
}

export default EventCard
