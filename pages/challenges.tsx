import { NextPage } from 'next'
import Head from 'next/head'
import mongoose from 'mongoose'
import Challenge from '../models/Challenges'
import { IChallenge } from '../types/challenge.interface'

type Props = {
  challenges: IChallenge[];
};

const Challenges: NextPage<Props>  = ({ challenges }) => {
  return (
    <>
      <Head>
        <title>codechallenge - challenges</title>
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
        <div className="flex flex-col w-full py-6">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Challenges
          </h1>
          <p className="text-gray-500 sm:text-md md:text-lg mb-5">
            Grow your programming and web development skills by participating to
            challenges
          </p>
        </div>
        <div className="flex flex-row flex-wrap container pb-12 mx-auto gap-y-6 gap-4">
          {challenges.map((challenge: IChallenge) => (
            <a
              key={challenge.title}
              href="#"
              className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-[calc(50%-8px)]"
            >
              <img
                className="object-cover w-full h-auto max-h-64 sm:max-h-[190px] rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
                src={challenge.img}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {challenge.title}
                </h5>
                <div className="text-white mb-3 bg-[#b1b845] hover:bg-[#969c3b] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer w-fit capitalize">
                  {challenge.level}
                </div>
                {/* <span className="text-white mb-3 bg-[#b6853c] hover:bg-[#86622c] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer w-fit capitalize">
                  Intermediate
                </span>
                <span className="text-white mb-3 bg-[#d1411d] hover:bg-[#8a3925] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer w-fit capitalize">
                  Advanced
                </span> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {challenge.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  );
};

export default Challenges;

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string);
  }

  const challenges = await Challenge.find();
  return {
    props: { challenges: JSON.parse(JSON.stringify(challenges)) },
  };
}
