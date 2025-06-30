
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const defaultText = 'Select a Language'

export default function Dropdown() {
  return (
    <div className='border border-white rounded-lg py-2 cursor-pointer hover:brightness-75 transition ease-in-out duration-100' typeof='button'>
      <div className='flex justify-between px-4'>
        <div className='text-[20px] font-semibold'>
          {/*defaultText*/}
          Javascript
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretDown} size='2xl' className='bg-transparent'/>
        </div>
      </div>
    </div>
  )
}