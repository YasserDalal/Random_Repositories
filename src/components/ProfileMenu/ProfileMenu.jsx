import { useEffect } from 'react'

export default function ProfileMenu({ className, opened, children, setVisibleAnimate, setIsHidden }) {
  useEffect(() => {
    let timeout; 

    if(opened) setVisibleAnimate(true), setIsHidden(true) // start the opening animation
    if(!opened) timeout = setTimeout(() => setVisibleAnimate(false), 250) // start the closing animation (after 250ms remove the node)
    if(!opened) setIsHidden(false)
    return () => clearTimeout(timeout) // clean up (if user clicks the button again before 250ms, the timeout will be cleared)
  }, [opened])

  return (
    <div className={className}>
      { children }
    </div>
  )
}