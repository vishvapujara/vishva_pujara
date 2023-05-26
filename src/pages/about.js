import * as React from "react"
import Layout from "../components/layout"
import { Col, Container, Image, Row } from "react-bootstrap"

import PlaceholderImage from '../images/placeholder.png'
import staticData from '../data/data.json'
import '../styles/about.css'
import Resume from "../components/aboutpage/resume"

const AboutPage = () => {
  return (
    <Layout>
      <Row id="page-about" className='page-about justify-content-center  align-middle'>
        <Col sm={12} md={12} lg={6} className="member-cover">
          <Image
            src={PlaceholderImage}
            className="resize_fit_center img-fluid"
            alt={staticData.about.name}
            title={staticData.about.name}
          />
        </Col>
        <Col sm={12} md={12} lg={6} className="margin-headbar member-details">
          <Container>
            <Resume />
            <RenderDownloadButton />
          </Container>
        </Col>
      </Row>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About | {staticData.about.name}</title>

function RenderDownloadButton() {
  if (staticData.config.resume.allow_download) {
    return (
      <Row className='section-download'>
        <Col>
          <a className='download-resume-button'
            href={staticData.config.resume.url}
            download>Download</a>
        </Col>
      </Row>
    )
  }

}