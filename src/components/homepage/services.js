import React from 'react'
import { Row } from 'react-bootstrap'

import ServicesCard from '../service-card'

export default function Services({ data }) {
  return (
    <Row className="services half-page text-center" id="home-services">
      <div className="section-title">
        <strong>What</strong> I do?
      </div>

      {data.services.map((service, index) => {
        return <ServicesCard key={index} service={service} />
      })}
    </Row>
  )
}
