import { useState } from 'react'

import HeaderCard from '../components/headerCard/HeaderCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Lists from '../components/dropdownLists/Lists' 
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'
import RetryButton from '../components/error/button/RetryButton'

export default function Card({ className, open, setOpen, data, profilePic, setLanguagePicked, languagePicked, randomRepo, setRandomRepo, languageColors, isHidden }) {
  const [languageChoices, setLanguageChoices] = useState(['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Swift', 'Rust', 'Kotlin', 'Dart', 'Scala', 'Objective-C', 'Haskell', 'Perl', 'R', 'Lua', 'Groovy', 'Shell', 'Pascal']);
  const [previousRepo, setPreviousRepo] = useState();

  const handleRandomRepo = () => {
    /* 
      filter the data based on the languagePicked 
      no language picked? pass the whole data
    */
    const filteredData = languagePicked ? data.filter(repo => repo.language === languagePicked) : data;
    const randomIndex = Math.floor(Math.random() * filteredData.length);

    // if there is no language picked and the repo is not the same as the previous one
    if(!languagePicked && filteredData[randomIndex] !== previousRepo){
      setRandomRepo(filteredData[randomIndex]);
      setPreviousRepo(filteredData[randomIndex]);
      return;
    }

    // if there is a language picked and the repo is not the same as the previous one
    if(languageChoices.includes(filteredData[randomIndex].language) && filteredData[randomIndex] !== previousRepo){
      setRandomRepo(filteredData[randomIndex]);
      setPreviousRepo(filteredData[randomIndex]);
      return;
    }

    // call again to create another random repo
    handleRandomRepo();
  };
  return (
    <div className={className}>
      <HeaderCard profilePic={profilePic}/>

      <Dropdown open={open} setOpen={setOpen} languagePicked={languagePicked} languageColors={languageColors} isHidden={isHidden}>
        {languageChoices.map((choice) => (
          <Lists className='px-5 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727] flex items-center gap-2' key={choice} onClick={() => setLanguagePicked(choice)}>
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: languageColors ? languageColors[choice].color : '#000' }}></div>
            <div className='flex justify-between flex-1'>
              <div>
                {choice}
              </div> 
              <div>
                {languagePicked === choice ? '✓' : ''}
              </div>
            </div>
          </Lists>
        ))}
      </Dropdown> 

      <Display open={open} randomRepo={randomRepo} languageColors={languageColors}/>
    
      {/* remove the comments to see the button */}
      {<RefreshButton languagePicked={languagePicked} data={data} handleRandomRepo={handleRandomRepo} isHidden={isHidden}/>}  {/*<RetryButton />*/}   
    </div>
  )
}