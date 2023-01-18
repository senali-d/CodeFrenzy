import { useEffect, useState } from 'react'
import mongoose from 'mongoose'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaBookReader } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Challenge from '../models/Challenges'
import { IChallenge } from '../types/challenge.interface'
import HorizontalCard from '../components/HorizontalCard'
import Image from 'next/image'

type Props = {
  challenges: IChallenge[]
};

const Home: NextPage<Props> = ({ challenges }) => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <>
      <Head>
        <title>codechallenge</title>
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
        <button onClick={switchTheme}>Change theme</button>
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to </span>
              <span className="block text-[#b1b845] xl:inline">
                codechallenge
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              codechallenge is a open source platform to build projects to learn
              and improve your skills.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div>
                <Link href="/">
                  <a
                    className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#b1b845] hover:bg-[#969c3b] md:py-2 lg:py-4 md:text-lg md:px-10"
                  >Sign up with Github</a>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 md:mt-3 lg:mt-0 sm:ml-3 md:ml-0 lg:ml-3">
                <Link href="/challenges">
                  <a
                    className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#b1b845] bg-indigo-100 hover:bg-indigo-200 md:py-2 lg:py-4 md:text-lg md:px-10 "
                  >View Challenges</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[50%]">
            <Image src="/banner.png" alt="Banner" width="500px" height="300px" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">
                  <FaBookReader size={20} />
                </div>
                <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Learn
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500 text-center md:text-left">
                Coding is a valuable skill to learn. Experts say it takes 10,000
                hours to master a new skill so why not start today.
              </dd>
            </div>

            <div className="relative">
              <dt className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">
                  <MdComputer size={22} />
                </div>
                <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Practice
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500 text-center md:text-left">
                Learning a new skill is not easy. It takes a lot of practice and
                the only way you will improve is by constantly building.
              </dd>
            </div>

            <div className="relative">
              <dt className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">
                  <AiOutlineShareAlt size={22} />
                </div>
                <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Share
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500 text-center md:text-left">
                After completing the challenge, you can share your work with the
                world and get feedback from the community members
              </dd>
            </div>
          </dl>
        </div>
        
        <div className="py-12 md:py-24">
          <div className="flex flex-col text-center w-full mb-5 md:mb-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              Latest Challenges
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-y-6 w-full py-6">
            {challenges.map((challenge: IChallenge) => (
              <div
                className="pb-4 lg:w-[calc(25%-1rem)] xs:w-[calc(50%-0.5rem)] border shadow-md rounded-lg bg-white hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
                key={challenge._id}
              >
                <Link href={`/challenge/${challenge._id}`}>
                  <a>
                    <HorizontalCard
                      image={challenge.img}
                      title={challenge.title}
                      level={challenge.level}
                      desc={challenge.desc}
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string)
  }

  const challenges = await Challenge.find().sort({ $natural: -1 }).limit(4)
  return {
    props: { challenges: JSON.parse(JSON.stringify(challenges)) },
  }
}
