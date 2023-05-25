import * as React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { Link } from "gatsby"

import FooterLinks from '../data/footer-links.json'
import PlaceholderImage from '../images/placeholder.png'
import '../styles/components/footer.css'

const Footer = ({ data }) => {
    return (
        <Row id="footer" className="footer half-page" >
            <Col>
                <Row className="brand-logo">
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
                </Row>
                <Row>
                    <Col>
                        <div className="offcanvas-title h5">{data.title}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            {FooterLinks.map((flink, index) => {
                                return (
                                    <li key={index}>
                                        <a href={flink.url}>{flink.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
                {/* <Row className="text-center">
          <Col>
            <SocialMediaLinks />
          </Col>
        </Row> */}
                {/* <Row className="developer-footprints">
                    <Col>
                        <div className="copyright-text text-center">
                            Developed by{' '}
                            <Link to={data.url} title={data.author}>
                                {data.author}
                            </Link>
                        </div>
                    </Col>
                </Row> */}
            </Col>
        </Row>
    )
}

export default Footer