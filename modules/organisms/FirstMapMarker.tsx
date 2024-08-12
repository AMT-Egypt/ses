import React from 'react'
import MapMark from './MapMark'
import { Tooltip } from 'react-tooltip'

export default function FirstMapMarker() {
  return (
    <button className="map-marker-wrapper first-map-marker" data-tooltip-id="first-marker-tooltip">
      <MapMark />
      <Tooltip id="first-marker-tooltip" place="top" className="first-marker-tooltip">
        <h4>Cairo, Egypt</h4>
        <span>
          126 Sameh Gado st. <br /> 6th of October. Giza
        </span>
      </Tooltip>
    </button>
  )
}
