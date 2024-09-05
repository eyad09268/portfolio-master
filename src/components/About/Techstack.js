import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {FaHtml5, FaCss3Alt, FaJsSquare} from 'react-icons/fa'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare />
      </Col>
    </Row>
  )
}

export default Techstack

