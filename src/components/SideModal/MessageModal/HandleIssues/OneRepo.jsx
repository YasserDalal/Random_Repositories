import lightenIfDark from './utils/lightenIfDark'

export default function OneRepo({ className, languageColors, languagePicked }) {
  return (
    <div className={className}>
      <div className='text-4xl max-[400px]:text-3xl max-[362px]:text-2xl text-red-300 pb-10'>Oopps!</div>
      <div className='text-xl max-[400px]:text-[18px] max-[362px]:text-base'>
        <div>There is <span className='text-red-400'>only one repository</span> found using</div>
        <div className='pb-5'>
          <span style={{ color: lightenIfDark(languageColors[languagePicked].color) }}>{languagePicked}</span> language
        </div>
        <div className='text-[15px] text-[#e3e3e39a]'>One repository can't be randomized, Please try another language.</div>
      </div>
    </div>
  )
}