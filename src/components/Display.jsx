import DefaultDisplay from './default/DefaultDisplay' 
import Loading from './loading/Loading'
import Repository from './success/Repository' 
import Error from './error/Error'

export default function Display() {
  return (
    <div className='flex flex-col gap-6 text-black h-full'>
      {/* remove the comments to see the components */}

      {/*<DefaultDisplay />*/}
      {/*<Loading />*/}
      {<Repository />}
      {/*<Error />*/}
    </div>
  )
}