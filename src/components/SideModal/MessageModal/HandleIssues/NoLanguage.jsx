import lightenIfDark from './utils/lightenIfDark'

export default function NoLanguage({ className, languageColors, languagePicked }) {
  return (
    <div className={className}>
      <div className='text-4xl text-red-300 pb-10'>Oh no!</div>
      <div className='text-xl'>
        <div>There are <span className='text-red-400'>no repositories</span> found using</div> 
        <div className='pb-5'>
          <span style={{ color: `${lightenIfDark(languageColors[languagePicked].color)}`}}> {languagePicked}</span> language.
        </div>
        <div className='text-[#d0d0d0] text-base font-medium cursor-pointer hover:text-[#e1e1e1] hover:bg-[#272727] transition ease-in-out duration-100 bg-[#343434] py-3 px-4 rounded-lg flex items-center justify-center gap-[5px]' typeof='button' onClick={() => window.open(`https://github.com/new`)}>
          Create a repository using <span style={{ color: `${lightenIfDark(languageColors[languagePicked].color)}`}}>{languagePicked}</span>
        </div>
      </div>
    </div>
  ) 
}