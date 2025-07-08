
export default function LoadSignIn({ className, showBar, loadWidth }) {
  return (
    <div className={className}>
      {showBar && <div className={`bg-blue-600 h-[4px]`} style={{ width: `${loadWidth}%` }}></div>}
    </div>
  );
}