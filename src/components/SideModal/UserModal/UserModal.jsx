import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import RepositoryIcon from '../../../assets/git.png'
import VisitButton from '../VisitButton' 

export default function UserModal({ className, data, welcomeUser, profileData }) {
  return (
    <>
      <div className={className}>
        <div className={`text-[#e3e3e3] ${(profileData && profileData.name.length) >= 16 ? 'text-[clamp(18px,5.7vw,25px)]' : 'text-3xl'} font-semibold pb-8 flex items-center pr-6`}>
          <div className='flex flex-wrap pr-2'>
            <div className='pr-2'>Hello, {(profileData && profileData.name.length) > 16 &&
              <FontAwesomeIcon icon={faHand} size='sm' className='text-[#ffbe73] animate-wave'/>}</div>
            <div className=''>{profileData && profileData.name}</div>
          </div>
          {(profileData && profileData.name.length) <= 16 && <FontAwesomeIcon icon={faHand} size='sm' className='text-[#ffbe73] animate-wave'/>}
        </div>
        <div className='text-[#b9b9b9] text-[clamp(14px,4vw,16px)] font-medium pb-3'>
          This is your Github repositories in a randomize order.
          I created this app for fun and learning. I hope we can connect and learn together. 😊
        </div>
        <div className='text-[#b9b9b9] text-[clamp(14px,4vw,16px)] font-medium'>
          Here is my Github profile 🡢 <a href="https://github.com/YasserDalal" className="text-[#dfdfdf] cursor-pointer hover:underline hover:text-[#c7c7c7] underline-offset-4 decoration-[#c7c7c7]" typeof='button' target='_blank'>YasserDalal</a>
        </div>
      </div>
      <VisitButton className='text-[#d0d0d0] text-base font-medium cursor-pointer hover:text-[#e1e1e1] hover:bg-[#272727] transition ease-in-out duration-100 bg-[#343434] py-3 px-4 rounded-lg flex items-center justify-center gap-[5px]' onClick={() => window.open(`https://github.com/${data && data[data.length - 1].owner.login}?tab=repositories`)} 
      RepositoryIcon={RepositoryIcon} 
      data={data} welcomeUser={welcomeUser}/>
    </>
  )
}