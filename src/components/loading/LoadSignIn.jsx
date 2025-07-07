
export default function LoadSignIn({ className, loading, loadWidth }) {
  return (
    <div className={className}>
      {loading && <div className={`${loadWidth === 100 && 'hidden'} bg-blue-600 h-[4px]`} style={{ width: `${loadWidth}%` }}></div>}
    </div>
  );
}