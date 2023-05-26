import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

import LogoLight from '../../images/placeholder.png'

export default function IntroBanenr({ data }) {
  var homeIntroRowClass = ''
  var homeIntroStyle = {}
  if (data.config.hero_banner.display) {
    homeIntroRowClass = "bg-image"
    homeIntroStyle = {
      backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg')",
      height: 'calc(100vh-53px)',
    }
  }
  return (
    <Row className="top-padding-required full-page `${homeIntroRowClass}`" id="home-intro" style={homeIntroStyle}>
      <Col className="text-center vertical-center">
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