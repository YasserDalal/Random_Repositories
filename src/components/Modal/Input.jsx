
export default function Input({ placeholder, setFoundUserName, setPlaceholder, setUserName, handleClickSubmit, showWarning, setShowWarning }) {
  const handleClickInput = () => {
    setPlaceholder(false)
    setShowWarning(false)
    setFoundUserName(false)
  }
  return (
    <div className={`relative flex justify-center ${showWarning ? 'pb-[65px]': 'pb-16'}`}>
      <label className={`${!placeholder && 'hidden'} text-[clamp(10px,6vw,20px)] absolute z-0 left-10 top-4 text-gray-300 opacity-50`} htmlFor="name">ex. YasserDalal</label>
      <input className='bg-transparent outline-none border-b px-3 pb-1 py-3 w-[90%] focus:border-b-2 caret-white absolute z-50 text-[clamp(10px,6vw,25px)] autofill:bg-transparent' type="text" name="name" id="name" onFocus={handleClickInput} onBlur={e => e.target.value === '' && setPlaceholder(true)} onKeyDown={e => e.key === 'Enter' && handleClickSubmit()} onChange={e => setUserName(e.target.value)}/>
    </div>
  )
}