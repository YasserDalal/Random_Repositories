import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function CloseButton({ className, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <FontAwesomeIcon icon={faXmark} size='2xl' className='bg-transparent'/>
    </div>
  )
}