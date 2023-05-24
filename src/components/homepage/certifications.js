import React from 'react'
import { Row } from 'react-bootstrap'

import certifications from '../../../content/certifications.json'
import CertificationsCard from '../../templates/certification-card'

export default function Certifications() {
  return (
    <Row
      className="certifications half-page text-center"
      id="home-certification"
    >
      <div className="title intro-section">
        <strong>Certifications</strong> I earned
      </div>
      {certifications.map((certification) => {
        return <CertificationsCard certification={certification} />
      })}
    </Row>
  )
}
