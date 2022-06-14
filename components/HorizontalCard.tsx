import PropTypes from 'prop-types'
import { NextPage } from 'next'
import React from 'react'
import { CLevel } from '../constant/enums'

type Props = {
  image: string,
  title: string,
  level: string,
  desc: string,
}

const HorizontalCard: NextPage<Props> = ({ image, title, level, desc}) => {

  const levelBadge = () => {
    switch(level) {
      case CLevel.BEGINER:
        return (
          <span className="text-white mb-3 bg-[#b1b845] hover:bg-[#969c3b] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.BEGINER}
          </span>
        )
        break
        case CLevel.INTERMEDIATE:
        return (
          <span className="text-white mb-3 bg-[#51d1f8] hover:bg-[#3da3c2] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.INTERMEDIATE}
          </span>
        )
        break
        case CLevel.ADVANCED:
          return (
            <span className="text-white mb-3 bg-[#d1411d] hover:bg-[#942e14] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
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
    <div className="h-full flex flex-col items-center">
      <img
        alt={title}
        className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
        src={image}
      />
      <div className="w-full px-5">
        <h2 className="title-font font-medium text-lg text-gray-900 dark:text-white">
          {title}
        </h2>
        {level && levelBadge()}
        <p className="my-4 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default HorizontalCard

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

HorizontalCard.defaultProps = {
  image: '',
  title: '',
  level: '',
  desc: '',
};
