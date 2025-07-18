import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'


export function Logout({ className }) {
  return (
    <div className={className} typeof='button' onClick={() => {
      localStorage.clear() 
      window.location.reload()
    }}>
      <FontAwesomeIcon icon={faRightFromBracket}/>Logout
    </div>
  )
}

export function CheckProfile({ className, handleCheckProfile }) {
  return (
    <div className={className} typeof='button' onClick={handleCheckProfile}>
      <FontAwesomeIcon icon={faUser}/>Check my profile
    </div>
  )
}