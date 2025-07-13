
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const defaultText = 'Select a Language'

export default function Dropdown({ children, open, setOpen, languagePicked, languageColors, isHidden }) {
  return (
    <div className='relative pb-6'>
      <div className={`bg-[#101010] flex justify-between px-4 border border-white rounded-lg py-2 ${!isHidden && 'cursor-pointer hover:brightness-75 transition ease-in-out duration-100'} z-50 relative`} typeof='button' onClick={() => !isHidden && setOpen(!open)}>
        <div className='text-[20px] font-semibold flex items-center'>
          {languagePicked ? 
            (<>
              <div className='w-4 h-4 rounded-full' style={{ backgroundColor: languageColors ? languageColors[languagePicked].color : '#000' }}></div>
              <div className='ml-2'>{languagePicked}</div>
            </>) 
          : defaultText}
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretDown} size='2xl' className='bg-transparent'/>
        </div>
      </div>
      <div className={`my-scrollbar overflow-y-auto max-h-[170px] outline-none absolute bg-[#070707] select-none border-x-2 border-b-2 border-[#303030] text-[20px] font-semibold z-40 right-0 left-0 top-[56px] ${open ? 'opacity-100 shadow-[#777777] shadow-[0px_15px_20px_-6px] rounded-b-lg overflow-hidden -translate-y-0' : `opacity-0 rounded-b-lg overflow-hidden -translate-y-44`} transition-all ease-in-out duration-200 flex flex-col`}>
        {children}
      </div>
    </div>
  )
}