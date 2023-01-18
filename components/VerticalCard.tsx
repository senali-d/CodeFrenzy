import PropTypes from 'prop-types'
import { NextPage } from 'next'
import Badge from './Badge'
import Image from 'next/image'

type Props = {
  image: string,
  title: string,
  level: string,
  desc: string,
}

const VerticalCard: NextPage<Props> = ({ image, title, level, desc}) => {
  
  return (
    <>
      <Image
        className="object-cover w-full h-auto max-h-64 sm:max-h-[190px] rounded-t-lg sm:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <Badge level={level} />
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </>
  )
}

export default VerticalCard

VerticalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

VerticalCard.defaultProps = {
  image: '',
  title: '',
  level: '',
  desc: '',
}