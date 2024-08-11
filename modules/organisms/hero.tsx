import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import HeroTextSolid from 'modules/icons/heroTextSolid'
import MouseIcon from 'modules/icons/mouseIcon'
import ThreeLinesIcon from 'modules/icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import { useRef } from 'react'
export default function HeroModule(props: any) {
  const sectionRef = useRef()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
  const y = useTransform(scrollYProgress, [0, 1], ['-450%', '1000%'])
  return (
    <motion.section className="heroModule">
      <div className="overlay-lines">
        <div className="line">
          {' '}
          <motion.div style={{ y }} className="action-line"></motion.div>
        </div>
      </div>
      <motion.div className="theHero main-hero">
        <video autoPlay muted loop id="myVideo">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-description" ref={sectionRef}>
          <motion.div className="content">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Explore the Possibilities of</p>
            </div>
            <div className="head-text-solid">
              <HeroTextSolid />
            </div>
            <h1 className="main-h1 secondary-color solutions"> SOLUTIONS</h1>
            <div className="mouseIcon">
              <MouseIcon />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* <div className="hero-description">
          
        </div> */}
    </motion.section>
  )
}
