import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer>
        <Container>
        <Row>
            <Col className='test-center py-3'>
                Copyright &copy; EBUY
            </Col>
        </Row>
        </Container>
    </footer>
    </>
    
  )
}

export default Footer