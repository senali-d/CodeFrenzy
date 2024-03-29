import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineMenu } from 'react-icons/ai'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
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
    <nav className="fixed z-10 w-full mx-auto bg-indigo-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
      <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center flex-1">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex-1">CodeFrenzy</span>
        </Link>
        <div className="flex md:order-2">
          <button type="button" className="text-white bg-[#b1b845] hover:bg-[#969c3b] focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ml-5">Sign In</button>
          <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu />
          </button>
        </div>
        <div className={`${isOpenMenu ? 'block' : 'hidden' } justify-between items-center w-full md:flex md:w-auto md:order-1 space-x-3`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <Link href="/challenges">
              <a className="block py-2 pr-4 pl-3 text-white bg-[#b1b845] rounded md:bg-transparent md:text-[#b1b845] md:p-0 dark:text-white" aria-current="page">Challenges</a>
            </Link>
          </li>
          <li>
            <Link href="/solutions" >
              <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#b1b845] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Solutions</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/senali-d/CodeFrenzy" target="_blank" rel="noreferrer" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#b1b845] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><AiOutlineGithub size="20" /></a>
          </li>
          </ul>
          {theme === "light" ? (
            <BsMoonFill
              size="18"
              onClick={switchTheme}
              className="text-gray-500 hover:cursor-pointer"
            />
          ) : theme === "dark" ? (
            <BsSunFill
              size="18"
              onClick={switchTheme}
              className="text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <BsMoonFill
              size="18"
              onClick={switchTheme}
              className="text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
