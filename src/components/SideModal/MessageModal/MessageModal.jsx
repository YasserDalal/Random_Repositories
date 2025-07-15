import NoLanguage from './HandleIssues/NoLanguage';
import OneRepo from './HandleIssues/OneRepo';

export default function MessageModal({ className, noLanguage, oneRepo, languageColors, languagePicked }) {
  return (
    <div className={className}>
      {noLanguage && <NoLanguage languageColors={languageColors} languagePicked={languagePicked}/>}
      {oneRepo && <OneRepo languageColors={languageColors} languagePicked={languagePicked}/>}
    </div>
  );
}