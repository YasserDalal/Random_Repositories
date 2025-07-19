import GithubLogo from '../assets/github-mark-white.png'
import ProfileMenu from '../components/ProfileMenu/ProfileMenu'
import { CheckProfile, Logout } from '../components/ProfileMenu/Menus/Menus'

export default function Header({ className, onClick, data, profileData, setOpened, opened, visibleAnimate, setVisibleAnimate, handleCheckProfile, setIsHidden, isHidden, openSideModal }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <div className={`flex gap-5 items-center text-white pt-10 px-10 ${ isHidden && "opacity-20" } max-[450px]:px-4 relative z-50 bg-[#101010] `}>
        <div className='w-14'>
          <img src={GithubLogo} alt="github logo"/>
        </div>
        <div>
          <h1 className='font-semibold'>Github Random Repository</h1>
        </div>
      </div>
      {(data && profileData) && <ProfileMenu className='
            text-white absolute right-3 top-0 w-56 bg-[#101010] z-50 max-[840px]:hidden'
            profileData={profileData}
            opened={opened}
            setIsHidden={setIsHidden}
            setVisibleAnimate={setVisibleAnimate}>
              <div className={`absolute z-50 right-0 top-0 w-60 flex justify-center bg-[#101010] ${(visibleAnimate) && 'border-b border-[#303030]'} pt-3`} onClick={e => e.stopPropagation()}>
                <img className={`w-[74px] h-[74px] rounded-full mb-2 overflow-hidden cursor-pointer ${openSideModal && 'opacity-20 pointer-events-none'} hover:brightness-75 transition-all ease-in-out duration-100`} src={`${profileData.avatar_url}`} typeof='button' onClick={() => !openSideModal && setOpened(!opened)}/>
              </div>
              {(opened || visibleAnimate) && 
      
              <div className={`bg-[#101010] absolute z-40 right-2 -left-2 text-[#b9b9b9] text-[clamp(14px,4vw,16px)] p-1 py-2 font-medium rounded-b-lg shadow-[#747474] shadow-[-1px_2px_6px_0px] ${(opened && visibleAnimate) ? 'translate-y-[96px]': '-translate-y-[40px]'} transition ease-in-out duration-200`}>
                <CheckProfile className='cursor-pointer rounded-lg px-2 py-4 flex items-center gap-2 hover:shadow-[#747474] hover:shadow-[-2.2px_2px_1px_0px] hover:ml-2 transition-all ease-in-out duration-100' handleCheckProfile={handleCheckProfile}/>
                <Logout className='cursor-pointer px-2 py-4 rounded-lg flex items-center gap-2 hover:shadow-[#747474] hover:shadow-[-2.2px_2px_1px_0px] hover:ml-2 transition-all ease-in-out duration-100'/>
              </div>
              }
            </ProfileMenu>}
    </div>
  )
}