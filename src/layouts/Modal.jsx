import { useState } from 'react'  

import Heading from '../components/Modal/Heading'

export default function Modal({ className }) {
  const [showWarning, setShowWarning] = useState(false)

  return (
    <div className={className}>
      <div className='flex flex-col text-[#eaeaea]'>
        <Heading className='flex justify-center pt-10 pb-5'/>
      </div>
    </div>
  )
} 