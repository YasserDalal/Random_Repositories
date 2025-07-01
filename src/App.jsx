import { useState } from 'react'

import Header from './layouts/Header'
import Center from './layouts/Center'
import Card from './layouts/Card' 
import Footer from './layouts/Footer'
import Watermark from './components/Watermark/Watermark'  
export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-[#101010] h-auto min-w-[320px] max-w-full w-full flex flex-col gap-24 max-[768px]:gap-20'>
      <Header className="bg-[#101010] text-[clamp(10px,5.29vw,36px)] max-[320px]:text-[17px] "/>
      <Center className='bg-[#101010] '>
        <Card open={open} setOpen={setOpen}/>
      </Center>
      <Footer>
        <Watermark className='flex flex-col justify-center items-center text-[#ababab] pb-3 select-none'/>
      </Footer>
    </div>
  )
}