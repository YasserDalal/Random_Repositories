
export default function Center({ className, children, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>
      {children}
    </div>
  )
}