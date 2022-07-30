import PropTypes from 'prop-types'
import { CLevel } from '../constant/enums'

const Badge = ({ level }) => {
  const levelBadge = () => {
    switch (level) {
      case CLevel.BEGINER:
        return (
          <span className="w-fit text-white mb-1 bg-[#b1b845] hover:bg-[#969c3b] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.BEGINER}
          </span>
        );
        break;
      case CLevel.INTERMEDIATE:
        return (
          <span className="w-fit text-white mb-1 bg-[#51d1f8] hover:bg-[#3da3c2] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.INTERMEDIATE}
          </span>
        );
        break;
      case CLevel.ADVANCED:
        return (
          <span className="w-fit text-white mb-1 bg-[#d1411d] hover:bg-[#942e14] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {CLevel.ADVANCED}
          </span>
        );
        break;
      default:
        return (
          <span className="text-white mb-3 bg-[#692b79] hover:bg-[#4a1757] py-1 px-2 text-xs rounded-md mr-1 cursor-pointer capitalize">
            {level}
          </span>
        );
        break;
    }
  }

  return <div>{level && levelBadge()}</div>
}

export default Badge

Badge.propTypes = {
  level: PropTypes.string.isRequired,
}

Badge.defaultProps = {
  level: "",
}
