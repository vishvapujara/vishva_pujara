import * as React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import Header from "./header"

import '../styles/global.css';

const Layout = ({ children }) => {

  return (
    <Container className="container-fluid p-0">
      <Header />
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout