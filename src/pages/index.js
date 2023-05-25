import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../../components/banner'
import { handleClientScriptLoad } from 'next/script'
import Image from 'next/image'
import Card from '../../components/card'


const inter = Inter({ subsets: ['latin'] })

const handleOnBannerBtnClick =() => {
  console.log('hi banner button')

}

export default function Home() {
  return (

    <div className={styles.container}>
    <Head>
      <title>Coffe Connoisseur</title>
      <link rel= "icon" href="../../public/favicon.ico"></link>

    </Head>
    <main className={styles.main}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">


     <Banner buttonText ="View stores nearby" handleOnClick ={handleOnBannerBtnClick} />
      <div className = {styles.heroImage}>  
      <Image src = "/static/coffeCup.png" width = {300} height={220}/>
      </div>



    </div>

    <Card 
    name ='Dark Coffee' 
    imgUrl = "/static/coffeCup.png" 
    href = "/coffe-store/darkhorse-coffee"
    classname = {styles.card}
    />
    </main>
    </div>
  )


}
