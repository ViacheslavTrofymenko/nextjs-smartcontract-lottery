// imports work with our front end
// require does not
// nodejs != ecmascript / javascript
// backendJS is a little different from front end JS

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our smart contract lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HELLO!!!
    </div>
  )
}
