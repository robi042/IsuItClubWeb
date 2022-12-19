import React from 'react'
import styles from '../styles/upcomingEvents.module.css'
import Image from "next/image"

function upcomingEvents() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.text1}>Upcoming</div>
        <div className={styles.text2}>Events</div>
      </div>

      <div className={styles.upeventVideo}>
      <Image className={styles.image1} src="/img/contest.jpg" alt="" width="300" height="300" />
      <Image className={styles.image2} src="/img/robi_event.jpg" alt="" width="300" height="300" />
      <Image className={styles.image3} src="/img/tamzidEvent.jpg" alt="" width="300" height="300" />
      </div>
      
    </div>
  )
} 

export default upcomingEvents