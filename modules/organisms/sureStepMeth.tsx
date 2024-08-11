import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import ShineHeadLine from 'modules/molcules/shineHeadline'

const StepItem = ({ title, desc, withBorder, scrollY, percent, entry }) => {
  console.log()
  const width = useTransform(scrollY, percent, entry)
  const opacity = useTransform(scrollY, percent, [0, 1])
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      style={{ opacity }}
      className="sureStepCard"
      initial="hidden"
    >
      <motion.div className="title">{title}</motion.div>
      <div className="description">
        {withBorder && <motion.div style={{ width: width }} className="border-reval"></motion.div>}
        <p>{desc}</p>
      </div>
    </motion.div>
  )
}

export default function SureStepModule(props: any) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['end end', 'start start'],
  })
  return (
    <div className="sureStepModule container-fluid" ref={containerRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>business applications implementation</p>
            </div>
            <ShineHeadLine text={<span> Sure Step Methodology</span>} />
          </div>
          <div className="col-md-6 desc-side">
            <div className="sureStepContainer">
              <StepItem
                title={
                  <>
                    <span className="step">Step 1</span>
                    <span className="name">Define & Discover</span>
                  </>
                }
                desc="We work closely with you to understand your unique needs, challenges, and goals.  This collaborative approach allows us to define project scope, deliverables, and a clear roadmap for success."
                withBorder={true}
                percent={[1, 0.9]}
                entry={['0px', '200px']}
                scrollY={scrollYProgress}
              />
              <StepItem
                title={
                  <>
                    <span className="step">Step 2</span>
                    <span className="name"> Design & Develop</span>
                  </>
                }
                desc="Equipped with a well-defined roadmap, our team of experts gets to work on designing and developing the solution. We utilize Agile principles to ensure flexibility and continuous improvement throughout the process."
                withBorder={true}
                percent={[0.7, 0.6]}
                entry={['0px', '200px']}
                scrollY={scrollYProgress}
              />
              <StepItem
                title={
                  <>
                    <span className="step">Step 3</span>
                    <span className="name">Test & Refine</span>
                  </>
                }
                desc="Rigorous testing is crucial.  We implement comprehensive testing procedures at every stage to identify and address any potential issues. This ensures the final product meets the highest quality standards and delivers exceptional results."
                withBorder={true}
                percent={[0.5, 0.4]}
                entry={['0px', '200px']}
                scrollY={scrollYProgress}
              />
              <StepItem
                title={
                  <>
                    <span className="step">Step 4</span>
                    <span className="name">Implement & Launch</span>
                  </>
                }
                desc="With a polished solution in hand, we seamlessly integrate it into your environment and provide thorough user training to ensure smooth adoption.  This stage ensures a successful launch and empowers your team to leverage the solution effectively."
                withBorder={true}
                percent={[0.3, 0.2]}
                entry={['0px', '200px']}
                scrollY={scrollYProgress}
              />
              <StepItem
                title={
                  <>
                    <span className="step">Step 5</span>
                    <span className="name">Support & Evolve</span>
                  </>
                }
                desc="Our commitment extends beyond project completion. We offer ongoing support to address any questions or challenges you may face, and provide maintenance services to ensure the solution's continued effectiveness.  Additionally, we believe in continuous improvement, so we'll partner with you to evaluate the solution and explore opportunities for further growth and evolution."
                withBorder={false}
                percent={[0.2, 0]}
                entry={['0px', '200px']}
                scrollY={scrollYProgress}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
