
export default function VisitButton({ className, onClick, RepositoryIcon, welcomeUser }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <img src={RepositoryIcon} className='w-6'/>
      <div>{!welcomeUser ? "View all Yasser's repositories" : "View all your repositories"}</div>
    </div>
  )
}