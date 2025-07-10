import Language from './StatsComponents/Language'
import Stars from './StatsComponents/Stars'
import Forks from './StatsComponents/Forks'
import Shields from './StatsComponents/Shields'
export default function Stats({ className, randomRepo, languageColors }) {
  return (
    <div className={className}>
      <Language randomRepo={randomRepo} languageColors={languageColors}/>
      <Stars randomRepo={randomRepo}/>
      <Forks randomRepo={randomRepo}  />
      <Shields randomRepo={randomRepo}/>
    </div>
  )
}