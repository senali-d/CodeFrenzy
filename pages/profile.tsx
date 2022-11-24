import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile - codechallenge</title>
      </Head>
      <main className="mx-auto max-w-[1080px]">
        <div className="flex flex-col w-full py-6">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Profile Update
          </h1>
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#b1b845] focus:ring-offset-2"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="mt-1 block w-full rounded-md bg-slate-200 p-3 border-gray-300 shadow-sm focus:border-[#b1b845] focus:ring-[#b1b845] sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          className="mt-1 block w-full rounded-md p-3 bg-slate-200  border-gray-300 shadow-sm focus:border-[#b1b845] focus:ring-[#b1b845] sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="github-handle"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Github handle
                        </label>
                        <input
                          type="text"
                          name="github-handle"
                          id="github-handle"
                          className="mt-1 block w-full rounded-md bg-slate-200 p-3 border-gray-300 shadow-sm focus:border-[#b1b845] focus:ring-[#b1b845] sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm focus:border-[#b1b845] focus:outline-none focus:ring-[#b1b845] sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-white-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#b1b845] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#b1b845] focus:outline-none focus:ring-2 focus:ring-[#b1b845] focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
