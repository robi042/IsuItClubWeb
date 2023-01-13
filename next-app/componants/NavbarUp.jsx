import React from 'react'
import styles from "../styles/NavbarUp.module.css"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion";
import { useRouter } from 'next/router'


function NavbarUp() {
      const router = useRouter()
      const handleClick = () => {
            router.push('/registration')
          }
      return (
            <div className={styles.container}>
                  <div className={styles.item}>
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
                        <div className={styles.upcomingEvents}>
                              Upcoming Events
                        </div>
                        <div className={styles.memberForm} onClick={handleClick}>
                              Membership Form
                        </div>
                  </div>
            </div>
      )
}

export default NavbarUp