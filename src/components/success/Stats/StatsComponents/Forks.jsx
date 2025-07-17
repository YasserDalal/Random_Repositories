import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'

export default function Forks({ className, randomRepo }) {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faCodeFork} size='xs' className='bg-transparent'/>
      <div>
        <div>{randomRepo && randomRepo.forks}</div>
      </div>
    </div>
  )
}