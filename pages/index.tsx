import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { FaBookReader } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import { AiOutlineShareAlt } from 'react-icons/ai'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  }

  return (
    <>
      <Head>
        <title>codechallenge</title>
      </Head>
      <button onClick={switchTheme}>Change theme</button>
      <main className="px-4 mx-auto max-w-[1080px]">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to </span>
              <span className="block text-[#b1b845] xl:inline">codechallenge</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">codechallenge is a open source platform to build projects to learn and improve your skills.</p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#b1b845] hover:bg-[#969c3b] md:py-2 lg:py-4 md:text-lg md:px-10"> Sign up with Github </a>
              </div>
              <div className="mt-3 sm:mt-0 md:mt-3 lg:mt-0 sm:ml-3 md:ml-0 lg:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#b1b845] bg-indigo-100 hover:bg-indigo-200 md:py-2 lg:py-4 md:text-lg md:px-10 "> View Challenges </a>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[50%]">
            <img src="/banner.png" alt="Banner" />
          </div>
        </div>

        <div className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt className="flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">            
                    <FaBookReader size={20} />
                  </div>
                  <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Learn</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center md:text-left">Coding is a valuable skill to learn. Experts say it takes 10,000 hours to master a new skill so why not start today.</dd>
              </div>

              <div className="relative">
                <dt className="flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">
                    <MdComputer size={22} />
                  </div>
                  <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Practice</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center md:text-left">Learning a new skill is not easy. It takes a lot of practice and the only way you'll improve is by constantly building.</dd>
              </div>

              <div className="relative">
                <dt className="flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#b1b845] text-white">
                    <AiOutlineShareAlt size={22} />
                  </div>
                  <p className="pt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">Share</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 text-center md:text-left">After completing the challenge, you can share your work with the world and get feedback from the community members</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
