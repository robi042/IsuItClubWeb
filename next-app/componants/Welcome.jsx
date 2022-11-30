import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "../styles/Welcome.module.css"
import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });





const Welcome = () => {
      const [text, count] = useTypewriter({
            words: [
                  "Welcome to ISU IT CLUB",
                  "International Standard University",
                  "New Dimention Of Education"
            ],
            loop: true,
            delaySpeed: 2000
      })
      const [hasWindow, setHasWindow] = useState(false);
      useEffect(() => {
            if (typeof window !== "undefined") {
                  setHasWindow(true);
            }
      }, []);
      const [isPlaying, setIsPlaying] = useState(true);
      return (
            <div className={styles.container}>
                  <div>
                        <h1 className={styles.typing}>
                              <span>{text}</span>
                              <Cursor cursorColor="#F7AB0A" />
                        </h1>
                  </div>

                  <div className={styles.item}>
                        <motion.div className={styles.video}
                              initial={{
                                    x: -200,
                                    opacity: 0
                              }}
                              transition={{
                                    duration: 1.2
                              }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}>
                              <ReactPlayer url="https://youtu.be/2q3c9L9APSA" playing={isPlaying} height={250} width={350} />
                        </motion.div>
                        <div className={styles.text}>
                              ISU has come into being under the Private University Act, 2010 with the approval of UGC and the Ministry of Education, Govt. of the People’s Republic of Bangladesh. It has been founded by the ‘International Standard University Trust’ and is managed by a Board of Trustees, composed of the philanthropic industrialists from Standard Group who are committed to imparting quality education to the students. As a part of their CSR activity, the founders aim at building the university as purely a non-profit institution.
                              The campus is student friendly with all sorts of modern facilities in the classrooms, labs, library etc. The permanent campus will soon be established within the city of Dhaka while most other private universities are moving out of Dhaka city. In addition to quality education, the students will have access to several types of curricular and co-curricular activities, amusements, games, and sports.
                        </div>
                  </div>
            </div>
      )
}

export default Welcome