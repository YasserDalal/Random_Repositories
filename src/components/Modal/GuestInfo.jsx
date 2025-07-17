
export default function GuestInfo({ className }) {
  return (
    <div className={className}>
      <span>If you don't have a Github username, kindly</span>
      <span className='font-bold pl-1'>Continue as guest</span>
    </div>
  )
}