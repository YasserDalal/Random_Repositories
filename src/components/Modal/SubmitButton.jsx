
export default function SubmitButton({ className, fetchRepository }) {
  return (
    <div className={className}>
      <div className='bg-[#272727] rounded-xl py-2 px-4 w-full hover:bg-[#1f1f1f]  cursor-pointer transition ease-in-out duration-100 text-center text-[#b9b9b9] text-xl font-semibold' typeof='button' onClick={fetchRepository}>Submit</div>
    </div>
  )
}