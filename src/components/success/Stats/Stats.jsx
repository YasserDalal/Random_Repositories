import Language from './StatsComponents/Language'
import Stars from './StatsComponents/Stars'
import Forks from './StatsComponents/Forks'
import Shields from './StatsComponents/Shields'
export default function Stats({ className, randomRepo, languageColors }) {
  return (
    <div className={className}>
      <Language className='text-gray-600 flex gap-1 items-center' randomRepo={randomRepo} languageColors={languageColors}/>
      <Stars className='text-gray-600 flex gap-1 items-center' randomRepo={randomRepo}/>
      <Forks className='text-gray-600 flex gap-1 items-center' randomRepo={randomRepo}  />
      <Shields className='text-gray-600 flex gap-1 items-center' randomRepo={randomRepo}/>
    </div>
  )
}