import { useState } from 'react'  

import Heading from '../components/Modal/Heading'
import Input from '../components/Modal/Input'

export default function Modal({ className, setFoundUserName, setOpenModal, setUserName, userName }) {
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
      </div>
    </div>
  )
} 