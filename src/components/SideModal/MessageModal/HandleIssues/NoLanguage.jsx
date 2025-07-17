import lightenIfDark from './utils/lightenIfDark'

export default function NoLanguage({ className, languageColors, languagePicked }) {
  return (
    <div className={className}>
      <div className='text-4xl max-[400px]:text-3xl max-[362px]:text-2xl text-red-300 pb-10'>Oh no!</div>
      <div className='max-[400px]:text-[18px] text-xl max-[362px]:text-base'>
        <div>There are <span className='text-red-400'>no repositories</span> found using</div> 
        <div className='pb-5'>
          <span style={{ color: `${ lightenIfDark(languageColors[languagePicked].color) }`}}>
            {languagePicked}
          </span> language.
        </div>
        <div className='text-[#d0d0d0] max-[400px]:text-[clamp(14px,4vw,16px)] text-base font-medium cursor-pointer hover:text-[#e1e1e1] hover:bg-[#272727] transition ease-in-out duration-100 bg-[#343434] py-3 px-4 rounded-lg flex items-center justify-center gap-[5px]' typeof='button' onClick={() => window.open(`https://github.com/new`)}>
          Create a repository using 
          <span style={{ color: `${ lightenIfDark(languageColors[languagePicked].color) }`}}>
            {languagePicked}
          </span>
        </div>
      </div>
    </div>
  ) 
}