import { useMotionValue } from 'framer-motion'
import { useMotionTemplate, motion } from 'framer-motion'

export default function ShineHeadLine({ text}) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    console.log(clientX, clientY)
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px,#c8c6c6 0%, #FFFFFF 0%, #c8c6c6 50%)`
  const style = { backgroundImage: maskImage }

  return (
    <motion.h4
      onMouseMove={onMouseMove}
      style={style}
      className="secondary-h1 main-color"
    >{text}</motion.h4>
  )
}
