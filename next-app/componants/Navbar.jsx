import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.item}>
                        <div className={styles.logo}>
                              <Image src="/img/isu_logo.jpg" alt="" width="50" height="50" />
                        </div>
                        <div className={styles.texts}>
                              <div className={styles.text}>ISU IT CLUB</div>
                              <div className={styles.text}>International Standard University</div>
                        </div>
                  </div>
                  <div className={styles.item}>
                        <ul className={styles.list}>
                              <li className={styles.listItem}>Home</li>
                              <li className={styles.listItem}>Events</li>
                              <li className={styles.listItem}>Workshops</li>
                              <li className={styles.listItem}>Blogs</li>
                              <li className={styles.listItem}>About</li>
                              <li className={styles.listItem}>Team</li>
                        </ul>
                  </div>
                  <div className={styles.item}>
                        <div className={styles.email}>
                              <Image src="/img/email.jpg" alt="" width="25" height="25" />
                        </div>
                        <div className={styles.texts}>
                              <div className={styles.text}>Contact Us:</div>
                              <div className={styles.text}>itclub@isu.ac.bd</div>
                        </div>
                  </div>
            </div>
      )
}

export default Navbar