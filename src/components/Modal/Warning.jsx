import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons' 

export default function Warning({ showWarning, userName, foundUserName }) {
  const emptyMessage = 'Oopps username cannot be empty'
  const notFoundMessage = 'User not found'
  return (
    <div className='flex px-7 pb-5 items-center gap-2'>
      <div className={`${!showWarning && 'hidden'} w-7 flex flex-col justify-center border-2 border-red-400 h-7 rounded-full`}>
        <FontAwesomeIcon icon={faExclamation} size='md' className={`${!showWarning && 'hidden'} text-red-400`}/>
      </div>
      <div className={`${!showWarning && 'hidden'} text-red-300 text-[clamp(10px,3.9vw,18px)] select-none`}>{!userName.length && emptyMessage}</div>
      <div className={`${!foundUserName && 'hidden'} text-red-300 text-[clamp(10px,3.9vw,18px)] select-none`}>{foundUserName && notFoundMessage}</div>
    </div>
  )
}