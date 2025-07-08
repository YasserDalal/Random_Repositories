
export default function LoadSignIn({ className, loading, loadWidth }) {
  return (
    <div className={className}>
      {loading && <div className={`bg-blue-600 h-[4px]`} style={{ width: `${loadWidth}%` }}></div>}
    </div>
  );
}