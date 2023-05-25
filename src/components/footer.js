import * as React from "react"
import { Col, Image, Nav, Row } from "react-bootstrap"
import { Link } from "gatsby"

import FooterLinks from '../data/footer-links.json'
import PlaceholderImage from '../images/placeholder.png'
import '../styles/components/footer.css'

const Footer = ({ data }) => {
    return (
        <Row id="footer" className="footer half-page" >
            <Col>
                {/* <Row className="brand-logo">
                    <Col>
                        <Image
                            className="center-block img-responsive"
                            src={PlaceholderImage}
                            width={160}
                            height={'auto'}
                            title={data.title}
                            alt={data.title}
                        />
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <div className="offcanvas-title h5">{data.title}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            {FooterLinks.map((link) => {
                                return (<Nav.Link key={link.title} href={link.url}>{link.title}</Nav.Link>)
                            })}
                        </Nav>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Footer