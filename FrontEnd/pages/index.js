import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSolinkedin } from '../Connector/solinkedin'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const Home = () => {

  return(
    <>
  
    <Hero/>
    </>
  )
}

export default Home
