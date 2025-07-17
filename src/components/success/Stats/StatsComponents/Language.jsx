
export default function Language({ className, randomRepo, languageColors }) {
  return (
    <div className={className}>
      <div className='w-4 h-4 rounded-full' style={{ backgroundColor: (languageColors && languageColors[randomRepo.language]) ? languageColors[randomRepo.language].color : '#000' }}></div>
      <div>{randomRepo && randomRepo.language}</div>
    </div>
  )
}