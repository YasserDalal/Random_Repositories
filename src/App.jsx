import { useState, useEffect } from 'react'

import Header from './layouts/Header'
import Center from './layouts/Center'
import Card from './layouts/Card' 
import Footer from './layouts/Footer'
import Watermark from './components/Watermark/Watermark' 
import Modal from './layouts/Modal'

export default function App() {
  const [open, setOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [data, setData] = useState()
  const [openModal, setOpenModal] = useState(true)
  const [foundUserName, setFoundUserName] = useState(false)
  useEffect(() => {
    console.log(data) // check if the data is available
  }, [data])
  useEffect(() => {
    // if the Modal is open, add overflow-hidden to the body to prevent scrolling
    openModal ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
  }, [openModal])
  return (
    <div className='bg-[#101010] min-h-screen min-w-[320px] max-w-full w-full flex flex-col relative'>
      <Header className={`${openModal && 'opacity-40 blur-[2px]'} bg-[#101010] text-[clamp(10px,5.29vw,36px)] max-[320px]:text-[17px] pb-24 max-[768px]:pb-20`} onClick={() => setOpen(false)}/>
      <Center className={`${openModal && 'opacity-40 blur-[2px]'} bg-[#101010] flex justify-center items-center pb-24 max-[768px]:pb-20`} onClick={() => open && setOpen(false)}>
        <Card className={`${openModal && 'opacity-40 blur-[2px]'} flex flex-col text-white min-w-min max-w-[340px] max-[400px]:min-w-none max-[400px]:max-w-none w-full`} open={open} setOpen={setOpen} data={data} setData={setData} userName={userName}/>
      </Center>
      <Footer className={`${openModal && 'opacity-40 blur-[2px]'}`} onClick={() => setOpen(false)}>
        <Watermark className='flex flex-col justify-center items-center text-[#ababab] pb-3 select-none'/>
      </Footer>

      {/* Modal is the first thing that users will see */}
      {openModal && (
        <div className='fixed top-0 right-0 bottom-0 left-0 px-4 max-[336px]:px-2'>
          <Modal className='opacity-100 bg-[#101010] rounded-xl max-w-[500px] min-w-[300px] w-full pb-7 left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 relative z-50 shadow-[0.5px_3px_20px_0px] shadow-[#717171]' setOpenModal={setOpenModal} setUserName={setUserName} foundUserName={foundUserName} setFoundUserName={setFoundUserName} userName={userName} setData={setData}/>
        </div>
      )}
    </div>
  )
}