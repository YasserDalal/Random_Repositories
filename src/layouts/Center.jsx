
export default function Center({ children, onClick }) {
  return (
    <div className='flex justify-center items-center pb-24 max-[768px]:pb-20' typeof='button' onClick={onClick}>
      {children}
    </div>
  )
}