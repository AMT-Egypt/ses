import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function DiveDeeperModule(props: any) {
  const container = useRef<any>(null)
  const ref = useRef(null)
  const isInView = useInView(container, { once: true })
  return (
    <div ref={container} className="diveDeeperModule container-fluid">
      <div className="container">
        <div
          ref={ref}
          className="row"
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          <div className="col-md-6 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Dive deeper</p>
            </div>
            <ShineHeadLine
              text={
                <span>
                  Your One-Stop Shop for <br /> Business Software Solutions
                </span>
              }
            />
          </div>
          <div className="col-md-6 desc-side">
            <p className="site-p">
              At Solid Edge Solutions (SES), we're passionate about shaping the digital future. Our
              team of pioneering minds thrives on innovation, crafting cutting-edge software
              development and solutions that push the boundaries of possibility.
            </p>
            <Link href="/contact-us">
              <a className="btn-outline">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
