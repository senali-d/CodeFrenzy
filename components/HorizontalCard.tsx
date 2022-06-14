import PropTypes from 'prop-types'
import { NextPage } from 'next'
import Badge from './Badge'

type Props = {
  image: string,
  title: string,
  level: string,
  desc: string,
}

const HorizontalCard: NextPage<Props> = ({ image, title, level, desc}) => {

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
        <Badge level={level} />
        <p className="my-4 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  )
}

export default HorizontalCard

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

HorizontalCard.defaultProps = {
  image: '',
  title: '',
  level: '',
  desc: '',
}
