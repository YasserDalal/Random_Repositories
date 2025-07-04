
export default function GuestButton({ className, setUserName, setOpenModal }) {
  const handleClickGuest = () => {
    setUserName('YasserDalal')
    setOpenModal(false)
  }
  return (
    <div className={className}>
      <div className='bg-[#b9b9b9] rounded-xl py-2 px-4 w-full hover:bg-[#2a2a2a] hover:text-[#b9b9b9] cursor-pointer transition ease-in-out duration-100 text-center text-black text-xl font-semibold' typeof='button' onClick={handleClickGuest}>Continue as guest</div>
    </div>
  )
}