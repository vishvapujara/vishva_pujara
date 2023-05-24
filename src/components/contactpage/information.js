import React from 'react'
import { Row } from 'react-bootstrap'
import ContactCard from '../contact-card'

export default function ContactInformation({ data }) {
    return (
        <Row style={{ marginTop: '40px' }}>
            <ContactCard title={`Phone`} info={data.contact.phone} />
            <ContactCard title={`Email`} info={data.contact.email} />
        </Row>
    )
}