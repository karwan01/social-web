import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidbar from '../components/Sidbar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className=" ">
      <Head>
        <title>Social Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Sidbar />
        <Feed />

        <Widgets />
      </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home
