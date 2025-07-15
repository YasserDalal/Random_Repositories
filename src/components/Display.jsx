import Repository from './success/Repository'

export default function Display({ open, randomRepo, languageColors }) {
  return (
    <div className={`first-letter:flex flex-col gap-6 pb-6 text-black h-full ${open && 'brightness-[.4]'}`}>
      {<Repository randomRepo={randomRepo} languageColors={languageColors}/>}
    </div>
  )
}