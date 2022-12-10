import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { motion } from "framer-motion";

const Navbar = () => {
      return (
            <div className={styles.container}>
                  <motion.div className={styles.item}
                        initial={{
                              x: -500,
                              opacity: 0,
                              scale: 0.5
                        }}
                        animate={{
                              x: 0,
                              opacity: 1,
                              scale: 1
                        }}
                        transition={{
                              duration: 1.5
                        }}>
                        <div className={styles.logo}>
                              <Image src="/img/isu_logo.jpg" alt="" width="50" height="50" />
                        </div>
                        <div className={styles.texts}>
                              <div className={styles.text}>ISU IT CLUB</div>
                              <div className={styles.text}>International Standard University</div>
                        </div>
                  </motion.div>
                  <div className={styles.item}>
                        <ul className={styles.list}>
                              <li className={styles.listItem}><a href='#'>Home</a></li>
                              <li className={styles.listItem}><a href='#'>Events</a></li>
                              <li className={styles.listItem}><a href='#'>Workshops</a></li>
                              <li className={styles.listItem}><a href='#'>Blogs</a></li>
                              <li className={styles.listItem}><a href='#'>About</a></li>
                              <li className={styles.listItem}><a href='#'>Team</a></li>

                        </ul>
                        
                  </div>
                  <motion.div className={styles.item}
                   initial={{ x: 300, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ x: 300, opacity: 0 }}
                   transition={{
                        duration: 1.5
                   }}>
                        <div className={styles.email}>
                              <Image src="/img/email.jpg" alt="" width="25" height="25" />
                        </div>
                        <div className={styles.texts}>
                              <div className={styles.text}>Contact Us:</div>
                              <div className={styles.text}>itclub@isu.ac.bd</div>
                        </div>
                  </motion.div>
            </div>
      )
}

export default Navbar