import RepositoryName from './RepositoryName/RepositoryName'  
import Description from './Description/Description'
import Stats from './Stats/Stats' 
export default function Repository(){
  return (
    <div className='flex flex-col gap-4 p-5 bg-[#E7E7E7] rounded-lg'>
      <RepositoryName />
      <Description />
      <Stats />
    </div>
  )
}