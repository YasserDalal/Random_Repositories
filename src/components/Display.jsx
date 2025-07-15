import Repository from './success/Repository'

export default function Display({ className, randomRepo, languageColors, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      {<Repository randomRepo={randomRepo} languageColors={languageColors}/>}
    </div>
  )
}