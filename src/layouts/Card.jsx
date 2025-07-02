import HeaderCard from '../components/headerCard/HeaderCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Lists from '../components/dropdownLists/Lists' 
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'
import RetryButton from '../components/error/button/RetryButton'

export default function Card({ className, open, setOpen, data, setData, userName }) {
  return (
    <div className={className}>
      <HeaderCard />

      <Dropdown open={open} setOpen={setOpen}>
        <Lists className='px-9 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727]'>
          Javascript
        </Lists>
        <Lists className='px-9 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727]'>
          Javascript
        </Lists>
        <Lists className='px-9 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727]'>
          Javascript
        </Lists>
        <Lists className='px-9 py-2 cursor-pointer text-[17px] hover:bg-[#272727]'>
          Javascript
        </Lists>
      </Dropdown> 

      <Display open={open}/>
    
      {/* remove the comments to see the button */}
      {<RefreshButton setData={setData} userName={userName}/>}  {/*<RetryButton />*/}   
    </div>
  )
}