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
        <motion.div className={styles.social}
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}>
          <SocialIcon className={styles.SocialIcon}
            url='https://www.linkedin.com/in/rabiul-hasan-robi'
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon className={styles.SocialIcon}
            url='https://www.facebook.com/rhrobi.2015'
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon className={styles.SocialIcon}
            url='https://www.instagram.com/rabiul_hasan_robi'
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon className={styles.SocialIcon}
            url='https://www.github.com/robi042'
            fgColor='gray'
            bgColor='transparent'
          />
        </motion.div>
      </div>

      <div className={styles.item}>
        <div className={styles.textLink}>
          <div className={styles.linkItem}><u>Useful Links</u></div>
          <div className={styles.linkItem}>ISU</div>
          <div className={styles.linkItem}>ISU LIbrary</div>
          <div className={styles.linkItem}>Online Form</div>
        </div>
      </div>

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