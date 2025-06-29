
import Header from './layouts/Header'

export default function App() {
  return (
    <div className='bg-[#101010] h-screen min-w-[320px] max-w-full w-full'> {/* after finishing the UI change the h-screen to h-auto*/}
      <Header className="bg-[#101010] text-[clamp(10px,5.29vw,30px)] max-[320px]:text-[17px] "/>
    </div>
  )
}