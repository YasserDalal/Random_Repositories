import HeaderCard from '../components/headerCard/headerCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'
import RetryButton from '../components/error/button/RetryButton'

export default function Card() {
  return (
    <div className='flex flex-col gap-6 text-white min-w-min max-w-[320px] w-full'>
      <HeaderCard />
      <Dropdown /> 
      <Display/>
      
      {/* remove the comments to see the button */}
      {<RefreshButton />}  {/*<RetryButton />*/}   
    </div>
  )
}