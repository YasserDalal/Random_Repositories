
export default function VisitButton({ className, onClick, RepositoryIcon }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <img src={RepositoryIcon} className='w-6'/>
      <div>View all Yasser's repositories</div>
    </div>
  )
}