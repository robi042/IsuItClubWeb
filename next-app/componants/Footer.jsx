import React from 'react'
import styles from "../styles/Footer.module.css"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion";
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

      <div className={styles.item}>
        <div className={styles.textLink}>
        <div className={styles.linkHead}><u>Useful Links</u></div>
          <div className={styles.linkItem}>ISU</div>
          <div className={styles.linkItem}>ISU LIbrary</div>
          <div className={styles.linkItem}>Online Form</div>
        </div>
      </div>

      <div className={styles.item}>
      <div className={styles.textLink}>
          <div className={styles.linkHead}><u>Location</u></div>
          <div className={styles.linkItem}>69 Mohakhali C/A, Dhaka-1212</div>  
        </div>
      </div>

    </div>
  )
}

export default Footer