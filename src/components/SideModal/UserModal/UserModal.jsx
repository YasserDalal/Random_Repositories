import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import RepositoryIcon from '../../../assets/git.png'
import VisitButton from '../GuestModal/VisitButton' 

export default function UserModal({ data, welcomeUser }) {
  return (
    <>
      <div className='flex-col pb-5'>
        <div className='text-[#e3e3e3] text-3xl font-semibold pb-8 flex items-center gap-2'>
          <div>Hello, {data && data[data.length - 1].owner.login}!</div>
          <FontAwesomeIcon icon={faHand} size='sm' className='text-[#ffbe73] animate-wave'/>  
        </div>
        <div className='text-[#b9b9b9] text-base font-medium pb-3'>
          This is your Github repositories in a randomize order.
          I created this app for fun and learning. I hope we can connect and learn together {data && data[data.length - 1].owner.login}. 😊
        </div>
        <div className='text-[#b9b9b9] text-base font-medium'>
          Here is my Github profile 🡢 <a href="https://github.com/YasserDalal" className="text-[#dfdfdf] cursor-pointer hover:underline hover:text-[#c7c7c7] underline-offset-4 decoration-[#c7c7c7]" typeof='button' target='_blank'>YasserDalal</a>
        </div>
      </div>
      <VisitButton className='text-[#d0d0d0] text-base font-medium cursor-pointer hover:text-[#e1e1e1] hover:bg-[#272727] transition ease-in-out duration-100 bg-[#343434] py-3 px-4 rounded-lg flex items-center justify-center gap-[5px]' onClick={() => window.open(`https://github.com/${data && data[data.length - 1].owner.login}?tab=repositories`)} 
      RepositoryIcon={RepositoryIcon} 
      data={data} welcomeUser={welcomeUser}/>
    </>
  )
}