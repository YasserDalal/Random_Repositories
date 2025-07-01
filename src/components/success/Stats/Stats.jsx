import Language from './StatsComponents/Language'
import Stars from './StatsComponents/Stars'
import Forks from './StatsComponents/Forks'
import Shields from './StatsComponents/Shields'
export default function Stats() {
  return (
    <div className='flex justify-between max-[400px]:justify-around'>
      <Language />
      <Stars />
      <Forks />
      <Shields />
    </div>
  )
}