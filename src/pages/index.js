import * as React from "react"
import Layout from "../components/layout"
import { Col, Row } from "react-bootstrap"


const IndexPage = () => {
  return (
    <Layout>
      <Row id="page-home" className='page-home justify-content-center'>
        <Col>

        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
