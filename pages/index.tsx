import type { NextPage } from 'next'

import { useTheme } from "next-themes" 
import { useEffect, useState } from 'react'

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
    <div>
      <main className="px-4 mx-auto max-w-[1080px]">
      <button onClick={switchTheme}>Change theme</button>
      </main>
    </div>
  )
}

export default Home
