import Head from 'next/head'
import Image from 'next/image'
import Featured from '../componants/Featured'
import Welcome from '../componants/Welcome'
import UpcomingEvents from '../componants/upcomingEvents'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ISU IT CLUB</title>
        <meta name="description" content="It is a club under the dept. of CSE" />
        <link rel="icon" href="/img/isu_logo.jpg" />
      </Head>

     <Featured></Featured>
     <Welcome></Welcome>
     <UpcomingEvents></UpcomingEvents>
    </div>
  )
}
