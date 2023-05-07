import React, { CSSProperties } from 'react'
import { getFormattedDate } from '@/utils/helpers'
import Image from 'next/image'
import styles from './EventImage.module.scss'

type EventImagePropsTypes = {
  date: number
  image: string
  genre: string
  genreColor: string
}

function EventImage({ date, image, genre, genreColor }: EventImagePropsTypes) {
  return (
    <div className={styles.eventImage}>
      <div className={styles.date}>{getFormattedDate(date)}</div>
      <div className={styles.imgContainer}>
        <Image src={image} height={172} width={308} alt='img' />
        <span className={styles.genre} style={{ backgroundColor: genreColor }}>
          {genre}
        </span>
      </div>
    </div>
  )
}

export default EventImage
