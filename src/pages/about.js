import * as React from "react"
import Layout from "../components/layout"
import { Col, Image, Row } from "react-bootstrap"

import PlaceholderImage from '../images/placeholder.png'

const AboutPage = () => {
  return (
    <Layout>
      <Row id="page-about" className='page-about justify-content-center'>
        <Col sm={12} md={12} lg={6} className="member-cover">
          <Image
            src={PlaceholderImage}
            className="resize_fit_center img-fluid"
            alt={'Karan Popat'}
            title={'Karan Popat'}
          />
        </Col>
        <Col sm={12} md={12} lg={6} className="top-padding-required member-details">
          <Resume />
          <RenderDownloadButton />
        </Col>
      </Row>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>

function Resume() {
  return <></>
}

function RenderDownloadButton() {
  return <></>
}