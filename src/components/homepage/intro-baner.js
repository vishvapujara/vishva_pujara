import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

import LogoLight from '../../../content/images/general/logo-dark-x.png'

export default function IntroBanenr() {
  return (
    <Row className="full-page top-padding-required" id="home-intro">
      <Col className="text-center">
        <Image
          className="center-block img-responsive"
          src={LogoLight}
          title="Karan Popat"
        />
        <ul className="brand-tagline">
          <li>{'[ Technologist ]'}</li><li>{'{ e - Commerce Architect }'}</li><li>{'[ Engineering Manager ]'}</li>
        </ul>
        <p>
          I help my clients to thrive in their digital business by providing
          best-in-class solutions.
        </p>
        {/* <p>
          I collaborate closely with my clients to guarantee their digital
          business is flourishing. My top priority is to equip them with the
          most optimal solutions that will result in successful outcomes.
          Whether it be enhancing their online presence, refining their digital
          marketing techniques, or simplifying their workflows, I am always
          available to offer my assistance in any way possible. I take great
          pride in empowering my clients to reach their objectives and
          accomplish triumph, and I am committed to going the extra mile to
          ensure their complete satisfaction with my services.
        </p> */}
      </Col>
    </Row>
  )
}
