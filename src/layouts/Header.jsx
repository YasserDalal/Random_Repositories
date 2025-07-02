import GithubLogo from '../assets/github-mark-white.png'

export default function Header({ className, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      <div className='flex gap-5 items-center text-white pt-10 px-10 max-[450px]:px-4'>
        <div className='w-14'>
          <img src={GithubLogo} alt="github logo"/>
        </div>
        <div>
          <h1 className='font-semibold'>Github Random Repository</h1>
        </div>
      </div>
    </div>
  )
}