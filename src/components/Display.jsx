import DefaultDisplay from './default/DefaultDisplay' 
import Loading from './loading/Loading'
import Repository from './success/Repository' 
import Error from './error/Error'

export default function Display({ open }) {
  return (
    <div className={`first-letter:flex flex-col gap-6 pb-6 text-black h-full ${open && 'brightness-[.4]'}`}>
      {/* remove the comments to see the components */}

      {/*<DefaultDisplay />*/}
      {/*<Loading />*/}
      {<Repository />}
      {/*<Error />*/}
    </div>
  )
}