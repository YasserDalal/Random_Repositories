
export default function GuestButton({ className, fetchRepository }) {
  const handleClickGuest = async () => {
    fetchRepository('YasserDalal')
  }
  return (
    <div className={className}>
      <div className='bg-[#494949] rounded-xl py-2 px-4 w-full hover:bg-[#3c3c3c] cursor-pointer transition ease-in-out duration-100 text-center text-[#dbdada] text-xl font-semibold' typeof='button' onClick={handleClickGuest}>Continue as guest</div>
    </div>
  )
}