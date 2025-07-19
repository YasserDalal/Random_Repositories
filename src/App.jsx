import { useState, useEffect } from "react";

import Header from "./layouts/Header";
import Center from "./layouts/Center";
import Card from "./layouts/Card";
import Footer from "./layouts/Footer";
import Watermark from "./components/Watermark/Watermark";
import Modal from "./layouts/Modal";
import LoadSignIn from "./components/loading/LoadSignIn";
import SideModal from "./components/SideModal/SideModal";
import ProfileMenu from './components/ProfileMenu/ProfileMenu';
import { 
    CheckProfile,
    Logout 
  } from './components/ProfileMenu/Menus/Menus'  


export default function App() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [profileData, setProfileData] = useState();
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(true);
  const [foundUserName, setFoundUserName] = useState(false);
  const [noRepos, setNoRepos] = useState(true);
  const [prevName, setPrevName] = useState(""); // for checking if the username is the same as the previous one
  const [loading, setLoading] = useState(false);
  const [loadWidth, setLoadWidth] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const [randomRepo, setRandomRepo] = useState();
  const [languagePicked, setLanguagePicked] = useState("");
  const [languages, setLanguages] = useState();
  const [languageColors, setLanguageColors] = useState();
  const [profilePic, setProfilePic] = useState();
  const [welcomeGuest, setWelcomeGuest] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState(false);
  const [openSideModal, setOpenSideModal] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [noLanguage, setNoLanguage] = useState(false);
  const [oneRepo, setOneRepo] = useState(false);
  const [opened, setOpened] = useState(false);
  const [visibleAnimate, setVisibleAnimate] = useState(false)

  const handleCheckProfile = () => window.open(`https://github.com/${profileData.login}`, '_blank')

  useEffect(() => {
    if (data && !languages && !languageColors) {
      fetch(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      )
        .then((res) => res.json())
        .then((data) => setLanguageColors(data));
    }

    setProfilePic(data && data[data.length - 1].owner.avatar_url);
  }, [data, languages, languageColors]);
  useEffect(() => {
    // if the Modal is open, add overflow-hidden to the body to prevent scrolling
    openModal
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [openModal]);
  useEffect(() => {
    // variables for setInterval and setTimeout functions
    let interval;
    let timeout;

    // Loading starts
    if (loading) {
      // show the loading bar
      setShowBar(true);
      // add 0.5% to loadWidth every 10ms
      interval = setInterval(() => {
        setLoadWidth((prevWidth) => prevWidth + 0.5);
      }, 10);
      return () => clearInterval(interval); // clean up
    }

    // Loading ends
    if (!loading) {
      // wait 1ms before hiding the loading bar
      timeout = setTimeout(() => {
        setShowBar(false);
        setLoadWidth(0);
      }, 1);
      return () => clearTimeout(timeout); // clean up
    }
  }, [loading]);
  return (
    <div className='bg-[#101010] min-h-screen min-w-[320px] max-w-full w-full flex flex-col relative'>
      <Header className={`${ openModal && "opacity-40 blur-[2px]" } 
      bg-[#101010] text-[clamp(10px,5.29vw,36px)] max-[320px]:text-[17px] pb-24 max-[768px]:pb-20 z-50 select-none relative`} 
      onClick={() => {
        setOpen(false)
        setOpened(false)
      }}
      data={data}
      profileData={profileData}
      opened={opened}
      setOpened={setOpened}
      visibleAnimate={visibleAnimate}
      setVisibleAnimate={setVisibleAnimate}
      handleCheckProfile={handleCheckProfile}
      setIsHidden={setIsHidden}
      isHidden={isHidden}
      openSideModal={openSideModal}
      />

      <Center className={`${ openModal && "opacity-40 blur-[2px]" } ${ isHidden && "opacity-20" } 
      bg-[#101010] flex justify-center items-center pb-24 max-[768px]:pb-32 select-none z-40`}
      onClick={() => {
        open && setOpen(false); 
        setOpened(false)
      }}>
        <Card className={`${openModal && "opacity-40 blur-[2px]"} 
        flex flex-col text-white min-w-min max-w-[340px] max-[400px]:min-w-none max-[400px]:max-w-none w-full`}
          open={open}
          setOpen={setOpen}
          setData={setData}
          userName={userName}
          profilePic={profilePic}
          data={data}
          setLanguagePicked={setLanguagePicked}
          languagePicked={languagePicked}
          randomRepo={randomRepo}
          languageColors={languageColors}
          setRandomRepo={setRandomRepo}
          welcomeGuest={welcomeGuest}
          isHidden={isHidden}
          profileData={profileData}
          setNoLanguage={setNoLanguage}
          setOneRepo={setOneRepo}
          setOpenSideModal={setOpenSideModal}
          setIsHidden={setIsHidden}/>
      </Center>

      <Footer className={`${ openModal && "opacity-40 blur-[2px]" } ${ isHidden && "opacity-20" }`}
      onClick={() => {
        setOpen(false) 
        setOpened(false)
      }}>
        <Watermark className='flex flex-col justify-center items-center text-[#ababab] pb-3 select-none' />
      </Footer>

      {/* Modal is the first thing that users will see */}
      {openModal && (
        <div className='fixed top-0 right-0 bottom-0 left-0 px-4 max-[336px]:px-2 z-50'>
          <Modal className='opacity-100 bg-[#101010] rounded-xl max-w-[500px] min-w-[300px] w-full pb-7 left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 relative z-50 shadow-[0.5px_3px_20px_0px] shadow-[#717171]'
            setOpenModal={setOpenModal}
            setUserName={setUserName}
            foundUserName={foundUserName}
            setFoundUserName={setFoundUserName}
            userName={userName}
            setData={setData}
            noRepos={noRepos}
            setNoRepos={setNoRepos}
            setLoading={setLoading}
            setPrevName={setPrevName}
            prevName={prevName}
            setLoadWidth={setLoadWidth}
            setLanguages={setLanguages}
            setRandomRepo={setRandomRepo}
            setOpenSideModal={setOpenSideModal}
            setWelcomeGuest={setWelcomeGuest}
            setWelcomeUser={setWelcomeUser}
            setIsHidden={setIsHidden}
            setProfileData={setProfileData}
          />
          <LoadSignIn className='absolute top-0 left-0 z-40 w-full'
            showBar={showBar}
            loadWidth={loadWidth}
          />
        </div>
      )}
      <SideModal
        data={data}
        profileData={profileData}
        welcomeGuest={welcomeGuest}
        welcomeUser={welcomeUser}
        setIsHidden={setIsHidden}
        openSideModal={openSideModal}
        setOpenSideModal={setOpenSideModal}
        noLanguage={noLanguage} 
        oneRepo={oneRepo}
        languageColors={languageColors}
        languagePicked={languagePicked}
        setNoLanguage={setNoLanguage}
        setOneRepo={setOneRepo}
      />

      {(data && profileData) && <ProfileMenu className='min-[840px]:hidden fixed left-0 bottom-3 z-40'
                  profileData={profileData}
                  opened={opened}
                  setIsHidden={setIsHidden}
                  visibleAnimate={visibleAnimate}
                  setVisibleAnimate={setVisibleAnimate}>
                    <div className={`${(opened || visibleAnimate) && ' backdrop-blur-xl'} ${(visibleAnimate) && 'border-r border-[#303030]'}
                    ${openSideModal && 'opacity-20 pointer-events-none'}
                      relative z-50 h-[136px] px-2 flex items-center justify-end max-[330px]:pl-2 pl-5`}>
                      <img className={`${(opened || visibleAnimate) ? 'brightness-75 hover:brightness-105': 'hover:brightness-75 brightness-105'} w-[74px] h-[74px] rounded-full mb-2 overflow-hidden cursor-pointer transition-all ease-in-out duration-100`} src={`${profileData && profileData.avatar_url}`} typeof='button' onClick={() => setOpened(!opened)}/>
                    </div>
                    {(opened || visibleAnimate) &&
                    
                    <div className={`bg-[#101010] absolute w-56 left-10 -bottom-[33.5px] z-40 text-[#b9b9b9] text-[15px] text-nowrap p-1 py-2 font-medium rounded-r-lg shadow-[#747474] shadow-[-3px_1px_6px_0px] ${(opened && visibleAnimate) ? 
                      'translate-x-[63px] max-[330px]:translate-x-[51.5px] -translate-y-[40px]': '-translate-x-[163px] max-[330px]:-translate-x-[173px] -translate-y-[40px]'} transition ease-in-out duration-200`}>
                      <CheckProfile className='cursor-pointer rounded-lg px-2 py-4 flex items-center gap-2 hover:shadow-[#747474] hover:shadow-[-2.2px_2px_1px_0px] hover:ml-2 transition-all ease-in-out duration-100' 
                      handleCheckProfile={handleCheckProfile}/>
                      <Logout className='cursor-pointer px-2 py-4 rounded-lg flex items-center gap-2 hover:shadow-[#747474] hover:shadow-[-2.2px_2px_1px_0px] hover:ml-2 transition-all ease-in-out duration-100'/>
                    </div>}
                  </ProfileMenu>}

    </div>
  );
}
