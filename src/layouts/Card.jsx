import { useState } from 'react'

import HeaderCard from '../components/headerCard/HeaderCard'  
import Dropdown from '../components/dropdownLists/Dropdown'
import Lists from '../components/dropdownLists/Lists' 
import Display from '../components/Display'
import RefreshButton from '../components/success/Button/RefreshButton'

export default function Card({ className, open, setOpen, data, profilePic, setLanguagePicked, languagePicked, randomRepo, setRandomRepo, languageColors, isHidden, setNoLanguage, setOneRepo, setOpenSideModal, setIsHidden }) {
  const [languageChoices, setLanguageChoices] = useState(['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Swift', 'Rust', 'Kotlin', 'Dart', 'Scala', 'Objective-C', 'Haskell', 'Perl', 'R', 'Lua', 'Groovy', 'Shell', 'Pascal']);
  const [previousRepo, setPreviousRepo] = useState();

  const handleRandomRepo = () => {
    /* 
      filter the data based on the languagePicked 
      no language picked? pass the whole data
    */
    const filteredData = languagePicked ? data.filter(repo => repo.language === languagePicked) : data;
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    
    // if there is no language found in repository
    if(filteredData.length === 0){
      setNoLanguage(true);
      setOpenSideModal(true);
      setIsHidden(true);
      return;
    }

    // if there is only one repository
    if(filteredData.length === 1){
      setOneRepo(true);
      setOpenSideModal(true);
      setIsHidden(true);
      setRandomRepo(filteredData[0]);
      setPreviousRepo(filteredData[0]);
      return;
    }

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

  const handleNavigateToRepo = () => window.open(randomRepo.html_url, '_blank');
  
  return (
    <div className={className}>
      <HeaderCard className='bg-[#101010] pb-6 pt-4 relative z-50' 
      profilePic={profilePic}/>

      <Dropdown className='relative pb-6'
      open={open} 
      setOpen={setOpen} 
      languagePicked={languagePicked} 
      languageColors={languageColors} 
      isHidden={isHidden}
        >
        {languageChoices.map(choice => (
          <Lists className='px-5 py-2 border-b-[1px] text-[17px] border-[#6d6d6d] cursor-pointer hover:bg-[#272727] flex items-center gap-2' key={choice} 
          onClick={() => setLanguagePicked(choice)}>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: languageColors ? languageColors[choice].color : '#000' }}></div>
            <div className='flex justify-between flex-1'>
              <div>{choice}</div> 
              <div>{languagePicked === choice ? '✓' : ''}</div>
            </div>
          </Lists>
        ))}
      </Dropdown> 

      <Display className={`${ !isHidden && 'cursor-pointer hover:brightness-75 transition ease-in-out duration-100' } 
      ${ open && 'brightness-[.4]' } 
      flex flex-col gap-6 mb-6 text-black h-full`} 
      randomRepo={randomRepo} 
      languageColors={languageColors} 
      onClick={() => !isHidden && handleNavigateToRepo()}/>
    
      {/* remove the comments to see the button */}
      {<RefreshButton className={`${!isHidden && 'cursor-pointer hover:scale-105 hover:bg-[#2a2a2a] hover:border-[#2a2a2a] transition ease-in-out duration-100'} 
      border border-white py-3 px-4 rounded-lg flex justify-center items-center gap-2`} 
      languagePicked={languagePicked} 
      data={data} 
      onClick={() => !isHidden && handleRandomRepo()}/>}
    </div>
  )
}