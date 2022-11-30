import React from 'react'
import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/img/isu_logo.jpg" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ISU IT CLUB</div>
          <div className={styles.text}>International Standard University</div>
        </div>
      </div>

    </div>
  )
}

export default Footer