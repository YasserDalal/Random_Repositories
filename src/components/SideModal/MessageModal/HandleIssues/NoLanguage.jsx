
export default function NoLanguage({ className }) {
  return (
    <div className={className}>
      <div className='text-4xl text-red-300 pb-10'>Oopps !!</div>
      <div className='text-xl'>There are <b className='text-red-400'>no repositories</b> found using JavaScript language</div>
    </div>
  )
}