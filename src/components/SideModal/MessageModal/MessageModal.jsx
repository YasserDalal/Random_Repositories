import NoLanguage from './HandleIssues/NoLanguage';
import OneRepo from './HandleIssues/OneRepo';

export default function MessageModal({ noLanguage, oneRepo }) {
  return (
    <div className='text-[#d0d0d0]'>
      {<NoLanguage />}
      {/*oneRepo && <OneRepo />*/}
    </div>
  );
}