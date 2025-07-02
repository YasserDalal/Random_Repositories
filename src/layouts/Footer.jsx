
export default function Footer({ children, onClick }) {
  return (
    <div typeof='button' onClick={onClick}> 
      {children}
    </div>
  )
}