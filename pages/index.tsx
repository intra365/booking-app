import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Container>
    
      <Head>
        <title>Onboarding</title>
        <meta name="description" content="Intra365 app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/test/selectmail">Select mail</Link>

      </Container>
  )
}

export default Home
