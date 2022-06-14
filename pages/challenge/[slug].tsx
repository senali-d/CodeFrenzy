import { NextPage } from "next";
import Head from "next/head";
import mongoose from "mongoose";
import Challenge from "../../models/Challenges";
import { IChallenge } from "../../types/challenge.interface";
import { CLevel } from "../../constant/enums";

type Props = {
  challenge: IChallenge;
};

const ChallengeDetail: NextPage<Props> = ({ challenge }) => {
  const levelBadge = () => {
    switch (challenge.level) {
      case CLevel.BEGINER:
        return (
          <span className="text-white mb-3 bg-[#b1b845] hover:bg-[#969c3b] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.BEGINER}
          </span>
        );
        break;
      case CLevel.INTERMEDIATE:
        return (
          <span className="text-white mb-3 bg-[#51d1f8] hover:bg-[#3da3c2] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.INTERMEDIATE}
          </span>
        );
        break;
      case CLevel.ADVANCED:
        return (
          <span className="text-white mb-3 bg-[#d1411d] hover:bg-[#942e14] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.ADVANCED}
          </span>
        );
        break;
      default:
        return (
          <span className="text-white mb-3 bg-[#692b79] hover:bg-[#4a1757] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {challenge.level}
          </span>
        );
        break;
    }
  };
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
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col">
            <div className="flex lg:flex-row">
              <div className="lg:w-4/6 flex-1 h-full overflow-hidden">
                <img
                  alt={challenge.title}
                  className="object-cover object-center h-full w-full"
                  src={challenge.img}
                />
              </div>
              <div className="lg:w-2/6 flex flex-0 items-center bg-[#318127]">
                <div className="text-center sm:pr-8 sm:pb-8 lg:pl-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-200">
                    <img
                      alt={challenge.title}
                      className="object-cover object-center h-full w-full rounded-full"
                      src={challenge.img}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-100 text-lg">
                      {"Senali Dilumik"}
                    </h2>
                    <div className="w-12 h-1 bg-[#b1b845] rounded mt-2 mb-4"></div>
                    <p className="text-base text-gray-300 mb-2">
                      {"Raclette knausgaard hella meggs normcore williamsbu"}
                    </p>
                    <div className="flex">
                      {challenge.level && levelBadge()}
                      <span className="text-white mb-3 bg-[#692b79] hover:bg-[#4a1757] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
                        {challenge.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/3 sm:pr-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Requirements:</p>
                <ul className="list-disc mb-8 ml-7">
                  {challenge.requirements.map((requirement) => (
                    <li className="mb-2">{requirement}</li>
                  ))}
                </ul>
                {challenge.resources && challenge.resources.length > 1 && (
                  <p className="leading-relaxed text-lg mb-4">Resources:</p>
                )}
                <ul className="list-disc mb-8 ml-7">
                  {challenge.resources.map((resource) => (
                    <li className="mb-2">{resource}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-1/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {challenge.outcomes && challenge.outcomes.length > 1 && (
                  <p className="leading-relaxed text-lg mb-4">Outcomes:</p>
                )}
                <ul className="list-disc ml-7">
                  {challenge.outcomes.map((outcome) => (
                    <li className="mb-2">{outcome}</li>
                  ))}
                </ul>
                {challenge.img && (
                  <>
                    <p className="leading-relaxed text-md mt-4 mb-1">
                      Download the resources and start
                    </p>
                    <button
                      type="button"
                      className="text-white bg-[#b1b845] hover:bg-[#969c3b] focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Download
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChallengeDetail;

export async function getServerSideProps(context: { query: { slug: string } }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI as string);
  }

  const challenge = await Challenge.findOne({ _id: context.query.slug });
  return {
    props: { challenge: JSON.parse(JSON.stringify(challenge)) },
  };
}
