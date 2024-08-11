import Link from 'next/link'
import ThreeLinesIcon from '../icons/threeLines'
import ShineHeadLine from 'modules/molcules/shineHeadline'
import Image from 'next/image'

export default function ContactUsMapModule(props: any) {
  return (
    <div className="contactUsMapModule container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content-side">
            <ShineHeadLine text={<span>LOCATIONS</span>} />
          </div>
          <div className="col-md-12 desc-side">
            <div className="map-section">
              <Image src="/images/location-map.png" width="900px" height="515px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
