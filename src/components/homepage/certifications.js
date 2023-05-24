import React from 'react'
import { Row } from 'react-bootstrap'

import CertificationsCard from '../certification-card'

export default function Certifications({ data }) {
  return (
    <Row
      className="certifications half-page text-center"
      id="home-certification"
    >
      <div className="section-title">
        <strong>Certifications</strong> I earned
      </div>
      {data.certifications.map((certification, index) => {
        return <CertificationsCard key={index} certification={certification} />
      })}
    </Row>
  )
}
