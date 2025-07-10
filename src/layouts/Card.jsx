import { useState } from 'react'

import HeaderCard from '../components/headerCard/HeaderCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Lists from '../components/dropdownLists/Lists' 
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'
import RetryButton from '../components/error/button/RetryButton'

export default function Card({ className, open, setOpen, data, profilePic, setLanguagePicked, languagePicked, randomRepo, setRandomRepo, languageColors }) {
  const [languageChoices, setLanguageChoices] = useState(['HTML', 'CSS', 'JavaScript', 'TypeScript']);
  const [previousRepo, setPreviousRepo] = useState();

  const handleRandomRepo = () => {

    const filteredData = data.filter(repo => repo.language === languagePicked);
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    if(previousRepo === filteredData[randomIndex]){
      handleRandomRepo();
    }else if(languageChoices.includes(filteredData[randomIndex].language)){
      setPreviousRepo(filteredData[randomIndex]);
      setRandomRepo(filteredData[randomIndex]);
    }
  };
  return (
    <div className={className}>
      <HeaderCard profilePic={profilePic}/>

      <Dropdown open={open} setOpen={setOpen} languagePicked={languagePicked}>
        {languageChoices.map((choice) => (
          <Lists className='px-9 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727]' key={choice} onClick={() => setLanguagePicked(choice)}>
            {choice}
          </Lists>
        ))}
      </Dropdown> 

      <Display open={open} randomRepo={randomRepo} languageColors={languageColors}/>
    
      {/* remove the comments to see the button */}
      {<RefreshButton languagePicked={languagePicked} data={data} handleRandomRepo={handleRandomRepo}/>}  {/*<RetryButton />*/}   
    </div>
  )
}