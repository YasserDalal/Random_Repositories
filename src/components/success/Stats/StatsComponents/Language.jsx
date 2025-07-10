
export default function Language({ randomRepo, languageColors }) {

  return (
    <div className='text-gray-600 flex gap-1 items-center'>
      <div className='w-4 h-4 rounded-full' style={{ backgroundColor: languageColors ? languageColors[randomRepo.language].color : '#000' }}></div>
      <div>{randomRepo && randomRepo.language}</div>
    </div>
  )
}