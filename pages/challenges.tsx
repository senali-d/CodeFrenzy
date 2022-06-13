import { NextPage } from 'next'
import Head from 'next/head'
import mongoose from 'mongoose'
import Challenge from '../models/Challenges'
import { IChallenge } from '../types/challenge.interface'
import VerticalCard from '../components/VerticalCard'

type Props = {
  challenges: IChallenge[];
};

const Challenges: NextPage<Props>  = ({ challenges }) => {
  return (
    <>
      <Head>
        <title>codechallenge - challenges</title>
      </Head>
      <main className="mx-auto max-w-[1080px]">
        <div className="flex flex-col w-full py-6">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Challenges
          </h1>
          <p className="text-gray-500 sm:text-md md:text-lg mb-5">
            Grow your programming and web development skills by participating to
            challenges
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-y-6 w-full pb-6">
          {challenges.map((challenge: IChallenge) => (
            <div
              key={challenge._id}
              className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[100%] xs:w-[48%] sm:w-full lg:w-[calc(50%-8px)]"
            >
              <VerticalCard
                image={challenge.img}
                title={challenge.title}
                level={challenge.level}
                desc={challenge.desc}
              />
            </div>
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
