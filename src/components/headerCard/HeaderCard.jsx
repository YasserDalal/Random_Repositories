
export default function HeaderCard({ profilePic }) {
  return (
    <div className='bg-[#101010] pb-6 pt-4 relative z-50'>
      <div className='flex gap-4 items-center max-[400px]:justify-center'>
        <div className=' w-14 h-14 rounded-lg relative'>
          <img src={profilePic && profilePic} alt="github logo" className='w-full h-full object-cover rounded-lg'/>
        </div>
        <div className='text-3xl font-semibold'>Repository Finder</div>
      </div>
    </div>
  )
} 