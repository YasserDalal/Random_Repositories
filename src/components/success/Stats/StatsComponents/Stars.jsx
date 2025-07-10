import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Stars({ randomRepo }) {
  return (
    <div className='text-gray-600 flex gap-1 items-center'>
      <FontAwesomeIcon icon={faStar} size='xs' className='bg-transparent'/>
      <div>
        <div>{randomRepo && randomRepo.stargazers_count}</div>
      </div>
    </div>
  )
}