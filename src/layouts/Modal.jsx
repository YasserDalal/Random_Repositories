import { useState } from 'react'  

export default function Modal({ className }) {
  const [placeholder, setPlaceholder] = useState(true) 
  return (
    <div className={className}>
      <div className='flex flex-col text-[#eaeaea] gap-5'>
        <div className='flex justify-center pt-10 pb-5'>
          <div className='text-[clamp(15px,6vw,30px)] font-medium'>Enter your Github username</div>
        </div>
        <div className='relative flex justify-center pb-14'>
          <label className={`${!placeholder && 'hidden'} text-[clamp(10px,6vw,20px)] absolute z-0 left-10 top-4 text-gray-300 opacity-50`} htmlFor="name">ex. YasserDalal</label>
          <input className='bg-transparent outline-none border-b px-3 pb-1 py-3 w-[90%] focus:border-b-2 caret-white absolute z-50 text-[clamp(10px,6vw,25px)]' type="text" name="name" id="name" onFocus={() => setPlaceholder(false)} onBlur={(e) => e.target.value === '' && setPlaceholder(true)}/>
        </div>
        <div className='flex justify-center px-5'>
          <div className='bg-[#272727] rounded-xl py-2 px-4 w-full hover:bg-[#1f1f1f]  cursor-pointer transition ease-in-out duration-100 text-center text-[#b9b9b9] text-xl font-semibold' typeof='button'>Submit</div>
        </div>
        <div>
          <div className=' text-gray-400 text-center'>If you don't have a Github username, kindly continue as guest</div>
        </div>
        <div className='flex justify-center px-5'>
          <div className='bg-[#b9b9b9] rounded-xl py-2 px-4 w-full hover:bg-[#2a2a2a] hover:text-[#b9b9b9] cursor-pointer transition ease-in-out duration-100 text-center text-black text-xl font-semibold' typeof='button'>Continue as guest</div>
        </div>
      </div>
    </div>
  )
} 