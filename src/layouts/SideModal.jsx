import CloseButton from '../components/SideModal/CloseButton'
import GuestModal from '../components/GuestModal/GuestModal'
import { useState, useEffect } from 'react'

export default function SideModal({ setWelcomeGuest, data, welcomeGuest, isHidden, setIsHidden, openSideModal, setOpenSideModal }) {
  const [visibleAnimate, setVisibleAnimate] = useState(false)

  useEffect(() => {

    if(openSideModal) setVisibleAnimate(true)
    if(!openSideModal) setVisibleAnimate(false)
    
  }, [openSideModal])

  const handleCloseSideModal = () => {
    if(welcomeGuest){
      setWelcomeGuest(false)
      setTimeout(() => setOpenSideModal(false), 300)
    }
  }

  return openSideModal && ( 
    <div className={`${(data && welcomeGuest && visibleAnimate) ? '-translate-y-8 flex flex-col' : 'translate-y-96'} fixed
    bg-[#131313] bottom-0 right-3
    transition-all ease-in-out duration-200 w-[420px] h-72 rounded-[26px] px-5 pt-5 shadow-[#3f3f3f] shadow-[0px_1px_19px_5px]`}> 
      <CloseButton className='absolute top-2 right-2 text-[#e3e3e3] hover:bg-[#b9b9b926] cursor-pointer transition ease-in-out duration-100 px-4 py-[10px] rounded-full' onClick={handleCloseSideModal}/>
      {welcomeGuest && <GuestModal />}
    </div>
    )
}