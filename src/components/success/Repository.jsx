import RepositoryName from './RepositoryName/RepositoryName'  
import Description from './Description/Description'
import Stats from './Stats/Stats' 
export default function Repository({ randomRepo, languageColors }) {
  return (
    <div className='flex flex-col gap-4 p-5 bg-[#E7E7E7] rounded-lg'>
      <RepositoryName className='text-2xl font-semibold'>{randomRepo ? randomRepo.name : 'Default.js'}</RepositoryName>
      <Description className='text-gray-800 text-wrap'>
        {(randomRepo && randomRepo.description) ? randomRepo.description : 
        <div className='flex gap-1'>
          <div>This repository has no</div>
          <div className='font-bold'>description</div>
        </div>}
      </Description>
      <Stats className='flex justify-between max-[400px]:justify-around' randomRepo={randomRepo} languageColors={languageColors}/>
    </div>
  )
}