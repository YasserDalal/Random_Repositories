import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons' 

export default function Warning({className, userName, foundUserName, noRepos }) {
  const emptyMessage = 'Oopps username cannot be empty'
  const notFoundMessage = 'User not found'
  const noRepositoryMessage = 'User has no repositories'
  return (
    <div className={className}>
      <div className={`w-7 flex flex-col justify-center border-2 border-red-400 h-7 rounded-full`}>
        <FontAwesomeIcon icon={faExclamation} size='md' className={`text-red-400`}/>
      </div>
      { 
      // if the username is empty, show the empty message 
      !userName.length ? <div className={`text-red-300 text-[clamp(10px,3.9vw,18px)] select-none`}>{emptyMessage}</div> : 
      // if the username is found but has no repositories, show the no repository message
      (noRepos && foundUserName) ? <div className={`text-red-300 text-[clamp(10px,3.9vw,18px)] select-none`}>{noRepositoryMessage}</div> :
      // if the username is not found, show the not found message
      !foundUserName && <div className={`text-red-300 text-[clamp(10px,3.9vw,18px)] select-none`}>{notFoundMessage}</div>}
    </div>
  )
}