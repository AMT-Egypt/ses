import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'

export default function GetCloseContactUsModule(props: any) {
  return (
    <div className="diveDeeperModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-7 content-side">
            <div className="sub-section">
              <ThreeLinesIcon /> <p>Let’s Get Closer</p>
            </div>
            <ShineHeadLine
              text={
                <span>
                  Get in Touch, Contact Us <br /> Today!
                </span>
              }
            />
          </div>
          <div className="col-md-5 desc-side">
            <p className="site-p">
              Whether you're an individual, a small business, or a large enterprise, we have
              flexible plans designed to offer affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
