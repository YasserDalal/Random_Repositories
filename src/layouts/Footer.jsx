
export default function Footer({ className, children, onClick }) {
  return (
    <div className={className} typeof='button' onClick={onClick}> 
      {children}
    </div>
  )
}