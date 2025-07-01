import HeaderCard from '../components/headerCard/headerCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Lists from '../components/dropdownLists/Lists' 
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'
import RetryButton from '../components/error/button/RetryButton'

export default function Card({ open , setOpen }) {
  return (
    <div className='flex flex-col text-white min-w-min max-w-[340px] max-[400px]:min-w-none max-[400px]:max-w-none w-full'>
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
      {<RefreshButton />}  {/*<RetryButton />*/}   
    </div>
  )
}