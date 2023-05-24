import React from 'react'
import { Row } from 'react-bootstrap'

import services from '../../../content/services.json'
import ServicesCard from '../../templates/service-card'

export default function Services() {
  return (
    <Row className="services half-page text-center" id="home-services">
      <div className="title intro-section">
        <strong>What</strong> I do?
      </div>

      {services.map((service) => {
        return <ServicesCard service={service} />
      })}
    </Row>
  )
}
