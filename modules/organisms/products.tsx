import { forwardRef, useEffect, useRef } from 'react'
import ThreeLinesIcon from '../icons/threeLines'
import MicrosoftIcon from 'modules/icons/microsoftIcon'
import Image from 'next/image'
import { useScroll, useTransform, motion, useSpring, useInView } from 'framer-motion'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import ProductStIcon from 'modules/icons/productIcons/st'

const CardContentMain = ({
  mainTitle,
  productTitle,
  productDesc,
  icon,
  smoothProgress,
  entry,
  withTop,
}) => {
  const op1 = useTransform(smoothProgress, entry, ['1', '0.2'])
  return (
    <motion.div
      style={{
        opacity: op1,
      }}
      className="content-section"
    >
      {withTop && (
        <div className="sub-section">
          <ThreeLinesIcon /> <p>Products</p>
        </div>
      )}
      <ShineHeadLine text={<span>{productTitle}</span>} />

      <div className="inner-content">
        <div className="icon ">{icon}</div>
        <p>{productDesc}</p>
      </div>
    </motion.div>
  )
}

const ImageContainer = ({ smoothProgress, entry, imageLink }) => {
  const op1 = useTransform(smoothProgress, entry, ['1', '0'])
  return (
    <motion.div
      style={{
        opacity: op1,
      }}
    >
      <Image src={imageLink} width="1000" height="600" />
    </motion.div>
  )
}
///""
export default function ProductsModule(props: any) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'start start'],
  })
  const containerRef = useRef(null)
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

  return (
    <motion.section ref={containerRef} className="productsModule container-fluid">
      <div className="container mold" ref={sectionRef}>
        <div className="row cont">
          <div className="col-md-6 content-side">
            <CardContentMain
              withTop={true}
              mainTitle={
                <>
                  Your Trusted Partner <br /> in Digital Solutions
                </>
              }
              productTitle="Microsoft Power BI"
              icon={<MicrosoftIcon />}
              productDesc="Transform your data into actionable insights with Microsoft Power BI. This powerful business intelligence tool allows you to easily visualize and analyze your data, uncovering hidden trends and patterns. Empower everyone in your organization to make data-driven decisions and achieve improved performance with Power BI."
              smoothProgress={smoothProgress}
              entry={[0.9, 0.85]}
            />

            <CardContentMain
              withTop={false}
              mainTitle={
                <>
                  Your Trusted Partner <br /> in Digital Solutions
                </>
              }
              productTitle="Microsoft Dynamics Finance and Operations"
              icon={<MicrosoftIcon />}
              productDesc="Manage your entire financial and operational side with a powerful and comprehensive solution.  Finance & Operations offers advanced features for financial management, supply chain management, project management, and more. Designed for larger and more complex organizations, it empowers you to make data-driven decisions, optimize processes, and gain a competitive edge"
              smoothProgress={smoothProgress}
              entry={[0.8, 0.85]}
            />
            <CardContentMain
              withTop={false}
              mainTitle={
                <>
                  Your Trusted Partner <br /> in Digital Solutions
                </>
              }
              productTitle="Microsoft Dynamics Business Central"
              icon={<MicrosoftIcon />}
              productDesc="Simplify your business management with an all-in-one solution that connects your financials, sales, service, and operations. Streamline processes, gain a real-time view of your business, and access it from anywhere – perfect for small and mid-sized businesses with its ease of use, scalability, and cloud-based nature."
              smoothProgress={smoothProgress}
              entry={[0.5, 0.55]}
            />
            <CardContentMain
              withTop={false}
              mainTitle={
                <>
                  Your Trusted Partner <br /> in Digital Solutions
                </>
              }
              productTitle="V-Connect"
              icon={<ProductStIcon />}
              productDesc="Your first destination for unified communications and digital transformation in the Middle East and North Africa. All-in-one solutions that provide all the necessary tools for effective, fast, and secure business needs."
              smoothProgress={smoothProgress}
              entry={[0, 0.25]}
            />
          </div>
          <div className="col-md-6 desc-side">
            <motion.div className="bg-img">
              <ImageContainer
                smoothProgress={smoothProgress}
                entry={[1, 0.65]}
                imageLink="/images/products/firstVariant.png"
              />

              <ImageContainer
                smoothProgress={smoothProgress}
                entry={[0.85, 0.9]}
                imageLink="/images/products/thirdVaraint.png"
              />
              <ImageContainer
                smoothProgress={smoothProgress}
                entry={[0.4, 0.7]}
                imageLink="/images/products/secondVariant.png"
              />
              <ImageContainer
                smoothProgress={smoothProgress}
                entry={[0, 0.2]}
                imageLink="/images/products/fourthVariant.png"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
