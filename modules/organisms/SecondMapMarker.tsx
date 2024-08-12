import React from 'react'
import MapMark from './MapMark'
import { Tooltip } from 'react-tooltip'
import Flag from '../../public/images/flag.png'
import Image from 'next/image'

export default function SecondMapMarker() {
  return (
    <button
      className="map-marker-wrapper second-map-marker"
      data-tooltip-id="second-marker-tooltip"
    >
      <MapMark />
      <Tooltip id="second-marker-tooltip" place="top" className="second-marker-tooltip">
        <Image width={300} height={300} src={Flag} alt="flag" />
        <h4>Melbourne, AUS</h4>
        <span>
          100 Smith Street <br /> Collingwood VIC 3066 AU
        </span>
      </Tooltip>
    </button>
  )
}
