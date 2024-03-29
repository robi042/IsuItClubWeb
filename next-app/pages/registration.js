import Head from 'next/head'
import Registration from '../componants/Registration'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ISU IT CLUB</title>
        <meta name="description" content="It is a club under the dept. of CSE" />
        <link rel="icon" href="/img/isu_logo.jpg" />
      </Head>
     <Registration></Registration>

    </div>
  )
}
