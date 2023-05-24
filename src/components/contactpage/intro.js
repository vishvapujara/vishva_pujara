import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ContactIntro({ data }) {
    return (
        <Row>
            <Col>
                <h2>{data.contact.name}</h2>
                <div className="brand-tagline">
                    {data.about.tagline || data.about.short_description}
                </div>
                <p>
                    {data.about.short_description || data.about.description}
                </p>
            </Col>
        </Row>
    )
}