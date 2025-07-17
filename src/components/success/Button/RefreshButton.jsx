import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

export default function RefreshButton({ className, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <FontAwesomeIcon icon={faRotate} size='md' className='bg-transparent'/>
      <div className='select-none text-xl'>Refresh</div>
    </div>
  )
}