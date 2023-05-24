import React from 'react'
import { Row } from 'react-bootstrap'

import PlatformsCard from '../platforms-card'

export default function Platforms() {
  return (
    <Row className="platforms half-page text-center" id="home-platforms">
      <div className="title intro-section">
        <strong>Platforms</strong> I'm experienced
      </div>
      {data.platforms.map((platform) => {
        return <PlatformsCard platform={platform} />
      })}
    </Row>
  )
}
