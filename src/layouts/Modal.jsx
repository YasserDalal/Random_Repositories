import { useState } from 'react'  

import Heading from '../components/Modal/Heading'
import Input from '../components/Modal/Input'
import Warning from '../components/Modal/Warning'

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
      </div>
    </div>
  )
} 