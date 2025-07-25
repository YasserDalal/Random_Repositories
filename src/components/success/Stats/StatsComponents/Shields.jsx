import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation'

export default function Shields({ className, randomRepo }) {
  return (
    <div className={className}>
      <div className='border border-black w-4 h-4 rounded-full relative'>
        <FontAwesomeIcon icon={faExclamation} className='text-[13px] bg-transparent absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div>
        <div>{randomRepo && randomRepo.watchers_count}</div>
      </div>
    </div>
  )
} 