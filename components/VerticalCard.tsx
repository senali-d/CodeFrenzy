import React from 'react'
import { NextPage } from 'next'
import { CLevel } from '../constant/enums'

type Props = {
  image: string,
  title: string,
  level: string,
  desc: string,
}

const VerticalCard: NextPage<Props> = ({ image, title, level, desc}) => {

  const levelBadge = () => {
    switch(level) {
      case CLevel.BEGINER:
        return (
          <span className="w-fit text-white mb-1 bg-[#b1b845] hover:bg-[#969c3b] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.BEGINER}
          </span>
        )
        break
        case CLevel.INTERMEDIATE:
        return (
          <span className="w-fit text-white mb-1 bg-[#51d1f8] hover:bg-[#3da3c2] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.INTERMEDIATE}
          </span>
        )
        break
        case CLevel.ADVANCED:
          return (
            <span className="w-fit text-white mb-1 bg-[#d1411d] hover:bg-[#942e14] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
              {CLevel.ADVANCED}
            </span>
          )
        break
      default:
        return (
          <span className="text-white mb-3 bg-[#692b79] hover:bg-[#4a1757] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {level}
          </span>
        )
        break
    }
  }
  
  return (
    <>
      <img
        className="object-cover w-full h-full max-h-64 sm:max-h-[190px] rounded-t-lg sm:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {level && levelBadge()}
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </>
  );
};

export default VerticalCard
