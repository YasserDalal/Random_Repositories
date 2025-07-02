import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

export default function RefreshButton({ setData, userName }) {
  const fetchRepository = () => {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((response) => response.json())
      .then((data) => 
        setData(data[Math.floor(Math.random() * data.length)]))
  }
  return (
    <div className='border border-white py-3 px-4 rounded-lg flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:bg-[#2a2a2a] hover:border-[#2a2a2a] transition ease-in-out duration-100' typeof='button' onClick={fetchRepository}>
      <FontAwesomeIcon icon={faRotate} size='md' className='bg-transparent'/>
      <div className='select-none text-xl'>Refresh</div>
    </div>
  )
}