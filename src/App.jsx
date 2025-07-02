import { useState, useEffect } from 'react'

import Header from './layouts/Header'
import Center from './layouts/Center'
import Card from './layouts/Card' 
import Footer from './layouts/Footer'
import Watermark from './components/Watermark/Watermark' 

export default function App() {
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState('YasserDalal') // change this in your GitHub username
  const [data, setData] = useState()
  
  useEffect(() => {
    console.log(data) // check if the data is available
  }, [data])
  return (
    <div className='bg-[#101010] h-auto min-w-[320px] max-w-full w-full flex flex-col'>
      <Header className="bg-[#101010] text-[clamp(10px,5.29vw,36px)] max-[320px]:text-[17px] pb-24 max-[768px]:pb-20" onClick={() => setOpen(false)}/>
      <Center className='bg-[#101010] flex justify-center items-center pb-24 max-[768px]:pb-20' onClick={() => open && setOpen(false)}>
        <Card className='flex flex-col text-white min-w-min max-w-[340px] max-[400px]:min-w-none max-[400px]:max-w-none w-full' open={open} setOpen={setOpen} data={data} setData={setData} userName={userName}/>
      </Center>
      <Footer onClick={() => setOpen(false)}>
        <Watermark className='flex flex-col justify-center items-center text-[#ababab] pb-3 select-none'/>
      </Footer>
    </div>
  )
}