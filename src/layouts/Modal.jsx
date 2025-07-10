import { useState } from 'react'  

import Heading from '../components/Modal/Heading'
import Input from '../components/Modal/Input'
import Warning from '../components/Modal/Warning'
import SubmitButton from '../components/Modal/SubmitButton'
import GuestInfo from '../components/Modal/GuestInfo'
import GuestButton from '../components/Modal/GuestButton'

export default function Modal({ className, setFoundUserName, foundUserName, setOpenModal, setUserName, userName, setData, setNoRepos, noRepos, setLoading, setPrevName, prevName, setLoadWidth, setRandomRepo }) {
  const [placeholder, setPlaceholder] = useState(true)
  const [showWarning, setShowWarning] = useState(false)

  const handleClickSubmit = async (data) => {

    if(!data || !data.length){
      setFoundUserName(true)
      setNoRepos(true)      // if the data is empty, setNoRepos to true 
      setShowWarning(true)  // if the data is empty, show the warning
      setLoading(false)
      setPrevName(userName)
      return;
    }
    // if there is data
    setData(data) // set the data
    setPrevName(userName)
    setLoadWidth(100)
    setRandomRepo(data && data[Math.floor(Math.random() * data.length)])
    // after 100ms close the modal and stop loading
    setTimeout(() => {
      setOpenModal(false)
      setLoading(false)
    }, 100)
  }
  
  const fetchRepository = async (forGuest) => {
    // if continue as guest
    if(forGuest === 'YasserDalal'){
      setLoadWidth(0) // reset loadWidth back to 0
      setLoading(true) // start loading
      const response = await fetch(`https://api.github.com/users/${forGuest}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        }
      })
      const data = await response.json()
      handleClickSubmit(data)
      return;
    }

    if(!userName.length){
      setShowWarning(true)  // if username is empty show the warning immediately
      return;
    }

    try {
      // don't fetch if the username is the same as the previous one 
      // means that this username already fails
      if(prevName === userName) {
        setLoading(false) // stop loading
        setShowWarning(true) // show warning 
        return
      };

      setLoadWidth(0) // reset loadWidth back to 0
      setLoading(true) // start loading

      const response = await fetch(`https://api.github.com/users/${userName}/repos`);

      if (!response.ok){
        setFoundUserName(false) // if no user found setFoundUserName to false
        setShowWarning(true) // show the warning
        setLoading(false)
        setPrevName(userName)
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
        setFoundUserName={setFoundUserName}
        userName={userName}/>

        <Warning className={`${!showWarning && 'hidden'} flex px-7 pb-5 items-center gap-2`}
        userName={userName} 
        foundUserName={foundUserName} 
        noRepos={noRepos}/>

        <SubmitButton className='flex justify-center px-5 pb-5' 
        fetchRepository={fetchRepository}/>
        
        <GuestInfo className='text-gray-400 flex gap-1 text-nowrap justify-center text-[clamp(10.3px,2.81vw,15px)] px-5 pb-5 max-[336px]:text-[10.3px] max-[336px]:px-3'/>

        <GuestButton className='flex justify-center px-5' 
        fetchRepository={fetchRepository}/>
      </div>
    </div>
  )
} 