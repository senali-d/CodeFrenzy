import { NextPage } from 'next'
import Head from 'next/head'
import mongoose from 'mongoose'
import Challenge from '../../models/Challenges'
import { IChallenge } from '../../types/challenge.interface';

type Props = {
  challenge: IChallenge;
};

const ChallengeDetail: NextPage<Props>  = ({ challenge }) => {
  return (
    <>
      <Head>
        <title>{`${challenge.title}`} - codechallenge</title>
      </Head>
      <main className="mx-auto max-w-[1080px]">
      <div className="flex flex-col w-full py-6">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            {challenge.title}
          </h1>
          <p className="text-gray-500 sm:text-md md:text-lg mb-5">
            {challenge.desc}
          </p>
        </div>
      </main> 
    </>
  )
}

export default ChallengeDetail

export async function getServerSideProps(context: { query: { slug: string } }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string);
  }

  const challenge = await Challenge.findOne({_id: context.query.slug})
  return {
    props: { challenge: JSON.parse(JSON.stringify(challenge)) },
  };
}
