import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidbar from '../components/Sidbar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Social Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-2 grid grid-cols-9">
        <Sidbar />
        <Feed />
        <Widgets />
      </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home
