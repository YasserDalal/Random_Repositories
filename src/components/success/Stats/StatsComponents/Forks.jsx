import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'

export default function Forks() {
  return (
    <div className='text-gray-600 flex gap-1 items-center'>
      <FontAwesomeIcon icon={faCodeFork} size='xs' className='bg-transparent'/>
      <div>
        <div>2,223</div>
      </div>
    </div>
  )
}