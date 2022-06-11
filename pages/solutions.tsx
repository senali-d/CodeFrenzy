import Head from 'next/head'

const Solutions = () => {
  return (
    <>
    <Head>
      <title>codechallenge - Solutions</title>
    </Head>
    <main className="px-4 mx-auto max-w-[1080px]">
      <div className="flex flex-col w-full py-6">
        <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Solutions
        </h1>
        <p className="text-gray-500 sm:text-md md:text-lg mb-5">Here is the solutions from community. </p>
      </div>
      <div className="flex flex-row flex-wrap container pb-12 mx-auto gap-y-6 gap-4">
        {[1,2,3,4,5,6].map((i) => (
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md sm:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-[calc(50%-8px)]"
          >
            <img
              className="object-cover w-full h-auto max-h-64 sm:max-h-[190px] rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://dummyimage.com/200x200"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  </>
  )
}

export default Solutions
