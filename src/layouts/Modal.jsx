import { useState } from 'react'  

import Heading from '../components/Modal/Heading'
import Input from '../components/Modal/Input'
import Warning from '../components/Modal/Warning'
import SubmitButton from '../components/Modal/SubmitButton'
import GuestInfo from '../components/Modal/GuestInfo'
import GuestButton from '../components/Modal/GuestButton'

export default function Modal({ className, setFoundUserName, foundUserName, setOpenModal, setUserName, userName, setData, setNoRepos, noRepos }) {
  const [placeholder, setPlaceholder] = useState(true)
  const [showWarning, setShowWarning] = useState(false)

  const handleClickSubmit = (data) => {
    if(!data || !data.length){
      setFoundUserName(true)
      setNoRepos(true)      // if the data is empty, setNoRepos to true 
      setShowWarning(true)  // if the data is empty, show the warning
      return;
    }
    setData(data)  // set the data
    setOpenModal(false) // close the modal
  }
  
  const fetchRepository = async () => {
    if(!userName.length){
      setShowWarning(true)  // if username is empty show the warning immediately
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${userName}/repos`);
      if (!response.ok){
        setFoundUserName(false) // if no user found setFoundUserName to false
        setShowWarning(true) // show the warning
        return
      };
      const data = await response.json(); // parse the json into object
      handleClickSubmit(data); // call handleClickSubmit
    } catch (err) {
      console.error('Caught error:', err.message);
    }
  };
  return (
    <div className={className}>
      <div className='flex flex-col text-[#eaeaea]'>
        <Heading className='flex justify-center pt-10 pb-14'/>

        <Input className={`relative flex justify-center ${showWarning ? 'pb-[70px]': 'pb-20'}`}
        placeholder={placeholder} 
        setPlaceholder={setPlaceholder} 
        setUserName={setUserName} 
        fetchRepository={fetchRepository} 
        setShowWarning={setShowWarning} 
        setFoundUserName={setFoundUserName}/>

        <Warning className={`${!showWarning && 'hidden'} flex px-7 pb-5 items-center gap-2`}
        userName={userName} 
        foundUserName={foundUserName} 
        noRepos={noRepos}/>

        <SubmitButton className='flex justify-center px-5 pb-5' 
        setOpenModal={setOpenModal} 
        setUserName={setUserName} 
        userName={userName} 
        setData={setData} 
        setShowWarning={setShowWarning} 
        setFoundUserName={setFoundUserName} 
        fetchRepository={fetchRepository}/>
        
        <GuestInfo className='text-gray-400 flex gap-1 text-nowrap justify-center text-[clamp(10.3px,2.81vw,15px)] px-5 pb-5 max-[336px]:text-[10.3px] max-[336px]:px-3'/>

        <GuestButton className='flex justify-center px-5' 
        setUserName={setUserName} 
        setOpenModal={setOpenModal}/>
      </div>
    </div>
  )
} 