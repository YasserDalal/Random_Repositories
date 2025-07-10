
export default function Lists({ className, children, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}>{children}</div>
  )
}