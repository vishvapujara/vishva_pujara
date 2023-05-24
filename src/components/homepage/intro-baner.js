import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

import LogoLight from '../../images/placeholder.png'

export default function IntroBanenr({ data }) {
  return (
    <Row className="full-page top-padding-required" id="home-intro">
      <Col className="text-center">
        <Image
          className="center-block img-responsive"
          src={LogoLight}
          title={data.about.name}
        />
        <div className="brand-tagline">
          {data.about.tagline || data.about.short_description}
        </div>
        <div className="brand-description">
          {data.about.short_description || data.about.description}
        </div>
      </Col>
    </Row>
  )
}