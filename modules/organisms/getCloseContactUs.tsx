import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import map from '../../public/images/map.png'
import Image from 'next/image'
import MapMark from './MapMark'
import { Tooltip } from 'react-tooltip'
import FirstMapMarker from './FirstMapMarker'
import SecondMapMarker from './SecondMapMarker'

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

        <div
          style={{
            margin: '4rem 0',
            position: 'relative',
          }}
        >
          <Image src={map} alt="map" height={700} width={1400} />
          <FirstMapMarker />
          <SecondMapMarker />
          <div></div>
        </div>
      </div>
    </div>
  )
}
