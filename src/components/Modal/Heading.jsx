
export default function Heading({ className, children }) {
  return (
    <div className={className}>
      <div className='text-[clamp(15px,6vw,30px)] font-medium'>Enter your Github username</div>
    </div>
  )
}