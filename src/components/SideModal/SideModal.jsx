import CloseButton from './CloseButton'
import GuestModal from './GuestModal/GuestModal'
import UserModal from './UserModal/UserModal'
import MessageModal from './MessageModal/MessageModal'
import { useState, useEffect } from 'react'

export default function SideModal({ data, welcomeGuest, openSideModal, setOpenSideModal, setIsHidden, welcomeUser, noLanguage, oneRepo, languageColors, languagePicked, setNoLanguage, setOneRepo, profileData }) {
  const [visibleAnimate, setVisibleAnimate] = useState(true)
  /*        -------------at first render--------------------
            ↓                     ↓                        ↓
      openSideModal = false | visibleAnimate = true | welcomeGuest = false
  */
  useEffect(() => {
    /*
      openSideModal will be true 
      after we fetch the data inside Modal.jsx
    */
    // starts the opening animation
    if (openSideModal) setVisibleAnimate(true)
    
    /* 
      now after we click the close button in <CloseButton /> component 
      openSideModal is now false, so we need to start the closing animation
      
      Note: !openSideModal is true because !false is equal to true
                     ↓
                     ↓                                                    */
    if (!openSideModal){
      const timeout = setTimeout(() => {
        setVisibleAnimate(false)
        setNoLanguage(false)
        setOneRepo(false)
      }, 300) // wait for 300ms of closing animation
      return () => clearTimeout(timeout) // clean up
    }
  }, [openSideModal])

  const handleCloseSideModal = () => {
    setIsHidden(false) // reveal the main page
 
    /* starts the closing animation in useEffect
    the purpose of using openSideModal state is to trigger the animation 
                       ↓
                       ↓                                                 */
    setOpenSideModal(false)
  }
 
  /* if openSideModal is false and visibleAnimate is false,
    then don't render the whole component */ 
  if (!openSideModal && !visibleAnimate && (!noLanguage || !oneRepo)) return null

  return ( 
    <>
      {((welcomeGuest || !welcomeGuest) && !noLanguage && !oneRepo) && 
      
        <div className={`${ (data && openSideModal && visibleAnimate) ? 'max-[455px]:-translate-y-0 -translate-y-8 flex flex-col' 
                                                                      : 'translate-y-96' } 
        fixed bg-[#131313] bottom-0 right-3 max-[455px]:right-0 max-[455px]:left-0 max-[455px]:min-w-none 
        max-[455px]:max-w-none transition-all ease-in-out duration-200 max-w-[430px] min-w-[320px] 
        w-full rounded-[26px] px-5 max-[350px]:px-4 py-5 shadow-[#3f3f3f] shadow-[0px_1px_19px_5px] z-50`}> 
          <CloseButton className='absolute top-2 right-2 text-[#e3e3e3] hover:bg-[#b9b9b926] 
          cursor-pointer transition ease-in-out duration-100 px-4 py-[10px] rounded-full' 
          onClick={handleCloseSideModal}/>
          
          {welcomeGuest && <GuestModal className='flex-col pb-5'/>}
          {!welcomeGuest && <UserModal className='flex-col pb-5' 
                            data={data} 
                            welcomeUser={welcomeUser} 
                            profileData={profileData}/>}
        </div>
      }
      {(noLanguage || oneRepo) &&

        <div className={`${ (data && openSideModal && visibleAnimate) ? 'max-[455px]:-translate-y-0 -translate-y-8 flex flex-col' 
                                                                      : 'max-[455px]:-translate-y-0 -translate-y-8 translate-x-[460px]' } 
          fixed bg-[#131313] bottom-0 right-3 max-[455px]:right-0 max-[455px]:left-0 max-[455px]:min-w-none max-[455px]:max-w-none transition-all ease-in-out duration-200 max-w-[430px] min-w-[320px] w-full h-auto rounded-[26px] px-5
          max-[350px]:px-4 pt-5 shadow-[#3f3f3f] shadow-[0px_1px_19px_5px] z-50`}>
          <CloseButton className='absolute top-2 right-2 text-[#e3e3e3] hover:bg-[#b9b9b926] 
          cursor-pointer transition ease-in-out duration-100 px-4 py-[10px] rounded-full' 
          onClick={handleCloseSideModal}/>

          {(noLanguage || oneRepo) && <MessageModal className='text-[#d0d0d0] pb-5' 
                                      noLanguage={noLanguage} 
                                      oneRepo={oneRepo} 
                                      languageColors={languageColors} 
                                      languagePicked={languagePicked}/>}
        </div>
      }
    </>
  )
}