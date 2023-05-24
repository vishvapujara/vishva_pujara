import React from 'react'
import { Row } from 'react-bootstrap'

import platforms from '../../../content/platforms.json'
import PlatformsCard from '../../templates/platforms-card'

export default function Platforms() {
  return (
    <Row className="platforms half-page text-center" id="home-platforms">
      <div className="title intro-section">
        <strong>Platforms</strong> I'm experienced
      </div>
      {platforms.map((platform) => {
        return <PlatformsCard platform={platform} />
      })}
    </Row>
  )
}
