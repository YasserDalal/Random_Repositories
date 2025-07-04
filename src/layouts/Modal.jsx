import { useState } from 'react'  

import Heading from '../components/Modal/Heading'
import Input from '../components/Modal/Input'
import Warning from '../components/Modal/Warning'
import SubmitButton from '../components/Modal/SubmitButton'
import GuestInfo from '../components/Modal/GuestInfo'
import GuestButton from '../components/Modal/GuestButton'

export default function Modal({ className, setFoundUserName, foundUserName, setOpenModal, setUserName, userName }) {
  const [placeholder, setPlaceholder] = useState(true)
  const [showWarning, setShowWarning] = useState(false)
  const handleClickSubmit = () => {
    if(!userName){
      setShowWarning(true)
      return;
    }
    setUserName(userName)
    setOpenModal(false)
  }

  return (
    <div className={className}>
      <div className='flex flex-col text-[#eaeaea]'>
        <Heading className='flex justify-center pt-10 pb-5'/>
        <Input placeholder={placeholder} setPlaceholder={setPlaceholder} setUserName={setUserName} handleClickSubmit={handleClickSubmit} showWarning={showWarning} setShowWarning={setShowWarning} setFoundUserName={setFoundUserName}/>
        <Warning showWarning={showWarning} userName={userName} foundUserName={foundUserName}/>
        <SubmitButton className='flex justify-center px-5 pb-5' setOpenModal={setOpenModal} setUserName={setUserName} handleClickSubmit={handleClickSubmit} userName={userName} setData={setData} setShowWarning={setShowWarning} setFoundUserName={setFoundUserName}/>
        <GuestInfo className='text-gray-400 flex gap-1 text-nowrap justify-center text-[clamp(10.3px,2.81vw,15px)] px-5 pb-5 max-[336px]:text-[10.3px] max-[336px]:px-3'/>
        <GuestButton className='flex justify-center px-5' setUserName={setUserName} setOpenModal={setOpenModal}/>
      </div>
    </div>
  )
} 