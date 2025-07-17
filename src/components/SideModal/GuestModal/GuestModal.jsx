import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import RepositoryIcon from '../../../assets/git.png'
import VisitButton from '../VisitButton'

export default function GuestModal() {
  return (
    <>
      <div className='flex-col pb-5'>
        <div className='text-[#e3e3e3] text-3xl font-semibold pb-8 flex items-center gap-2'>
          <div>Hello Guest!</div>
          <FontAwesomeIcon icon={faHand} size='sm' className='text-[#ffbe73] animate-wave'/>  
        </div>
        <div className='text-[#b9b9b9] text-[clamp(13.5px,3.4vw,16px)] font-medium'>
          Since you don't have a Github account, You can view my repositories in a randomize order.
        </div>
      </div>
      <div className='text-[#b9b9b9] text-[clamp(12.55px,3.4vw,16px)] font-medium pb-9 text-wrap'>
        These repositories are from 
        <span className='text-[#dfdfdf] pl-1 cursor-pointer hover:underline hover:text-[#c7c7c7] underline-offset-4 decoration-[#c7c7c7]' onClick={() => window.open('https://github.com/YasserDalal')} typeof='button'>
          Yasser's Github profile.
        </span>
      </div>
      <VisitButton className='text-[#d0d0d0] text-[clamp(14px,3.4vw,16px)] font-medium cursor-pointer hover:text-[#e1e1e1] hover:bg-[#272727] transition ease-in-out duration-100 bg-[#343434] py-3 px-4 rounded-lg flex items-center justify-center gap-[5px]' onClick={() => window.open('https://github.com/YasserDalal?tab=repositories')} RepositoryIcon={RepositoryIcon}/>
    </>
  )
}