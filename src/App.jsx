
import Header from './layouts/Header'
import Center from './layouts/Center'
import Card from './layouts/Card' 

export default function App() {
  return (
    <div className='bg-[#101010] h-screen min-w-[320px] max-w-full w-full flex flex-col gap-28'> {/* after finishing the UI change the h-screen to h-auto*/}
      <Header className="bg-[#101010] text-[clamp(10px,5.29vw,36px)] max-[320px]:text-[17px] "/>
      <Center className='bg-[#101010] '>
        <Card />
      </Center>
    </div>
  )
}