import Link from 'next/link'
import { AiOutlineTwitter, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" w-full p-4 sm:p-6 sm:px-4 bg-indigo-50 dark:bg-gray-800">
      <div className="mx-auto max-w-[1080px]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <a className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">codechallenge</span>
            </a>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/">
                <a className="mr-4 hover:underline md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="" className="hover:underline">codechallenge</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://twitter.com/senali_d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <AiOutlineTwitter />
            </a>
            <a href="https://github.com/senali-d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
