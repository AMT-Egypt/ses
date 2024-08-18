import { useEffect, useState } from 'react'

export default function Hero() {
  return (
    <div
      className="hero-animation"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 20,
        minHeight: '81vh',
      }}
    >
      <div className="text-animation">
        <p style={{ zIndex: '9999' }}>Explore the Possibilities of</p>
        <p style={{ zIndex: '9999' }}>SOLID EDGE SOLUTIONS</p>
      </div>
    </div>
  )
}
