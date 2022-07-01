import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import Entrance from "../components/Entrance";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lottery</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Entrance/>
    </div>
  )
}
