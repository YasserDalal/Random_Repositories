import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Stars({ className, randomRepo }) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faStar} size='xs' className='bg-transparent'/>
      <div>
        <div>{randomRepo && randomRepo.stargazers_count}</div>
      </div>
    </div>
  )
}