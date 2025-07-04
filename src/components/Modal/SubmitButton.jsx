
import { useEffect } from 'react';

export default function SubmitButton({ className, setOpenModal, setData, setShowWarning, userName, setFoundUserName }) {
  const handleClickSubmit = (data) => {
    if(!userName.length || !data.length){
      setShowWarning(true)
      return;
    }
    setData(data)
    setOpenModal(false)
  }

  const fetchRepository = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}/repos`);
      if (!response.ok){
        setFoundUserName(false)
        handleClickSubmit()
        return
      };
      const data = await response.json();
      setFoundUserName(true)
      handleClickSubmit(data);
    } catch (err) {
      console.error('Caught error:', err.message);
    }
  };

  return (
    <div className={className}>
      <div className='bg-[#272727] rounded-xl py-2 px-4 w-full hover:bg-[#1f1f1f]  cursor-pointer transition ease-in-out duration-100 text-center text-[#b9b9b9] text-xl font-semibold' typeof='button' onClick={fetchRepository}>Submit</div>
    </div>
  )
}