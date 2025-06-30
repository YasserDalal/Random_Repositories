import Language from './StatsComponents/Language'
import Stars from './StatsComponents/Stars'
import Forks from './StatsComponents/Forks'
import Shields from './StatsComponents/Shields'
export default function Stats() {
  return (
    <div className='flex gap-4'>
      <Language />
      <Stars />
      <Forks />
      <Shields />
    </div>
  )
}