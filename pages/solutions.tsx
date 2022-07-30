import Head from 'next/head'
import VerticalCard from '../components/VerticalCard'


const Solutions = () => {
  return (
    <>
    <Head>
      <title>Solutions - codechallenge</title>
    </Head>
    <main className="mx-auto max-w-[1080px]">
      <div className="flex flex-col w-full py-6">
        <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Solutions
        </h1>
        <p className="text-gray-500 sm:text-md md:text-lg mb-5">Here is the solutions from community.</p>
      </div>
      <div className="flex flex-row flex-wrap container pb-12 mx-auto gap-y-6 gap-4">
        {[1,2,3,4,5,6].map((i) => (
            <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-[100%] xs:w-[48%] sm:w-full lg:w-[calc(50%-8px)]"
          >
            <VerticalCard
              image={'https://dummyimage.com/200x200'}
              title={'Title'}
              level={i.toString()}
              desc={'Description'}
            />
          </div>
        ))}
      </div>
    </main>
  </>
  )
}

export default Solutions
