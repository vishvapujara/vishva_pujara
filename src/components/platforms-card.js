import React from 'react'
import { Col, Image } from 'react-bootstrap'

export default function PlatformsCard({ platform }) {
  return (
    <Col xs={12} sm={6} md={6} lg={6} xl={3} xxl={3}>
      <div className="card">
        <div className="content">
          <Image
            className="credential-badge roundedCircle"
            src={platform.picture}
            alt={platform.title}
            title={platform.title}
            width={240}
            height="auto"
          />
        </div>
      </div>
    </Col>
  )
}
