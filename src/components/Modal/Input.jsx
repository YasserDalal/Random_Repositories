
export default function Input({ className, placeholder, setFoundUserName, setPlaceholder, setUserName, fetchRepository, setShowWarning, userName }) {
  const handleClickInput = (e) => {
    if(!e.target.value.length || e.target.value.length){
      setPlaceholder(false)
      setShowWarning(false)
      setFoundUserName(false)
    }
    // only allow letters, numbers, and dashes
    setUserName((e.target.value).replace(/[^a-zA-Z0-9-]/g, ''))
  }
  return (
    <div className={className}>
      <label className={`${!placeholder && 'hidden'} text-[clamp(16px,5.7vw,22px)] absolute z-0 left-7 top-4 text-gray-300 opacity-50`} htmlFor="name">ex. YasserDalal</label>
      <input className='bg-transparent outline-none border-b px-3 pb-1 py-3 w-[90%] focus:border-b-2 caret-white absolute z-50 text-[clamp(16px,5.7vw,22px)] autofill:bg-transparent' type="text" name="name" id="name" onFocus={e => handleClickInput(e)} onBlur={e => e.target.value === '' && setPlaceholder(true)} onKeyDown={e => e.key === 'Enter' && fetchRepository()} onChange={e => handleClickInput(e)} value={userName}/>
    </div>
  )
}