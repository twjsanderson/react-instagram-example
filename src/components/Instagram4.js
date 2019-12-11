import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';
import animal3 from '../assets/animal3.jpg';

// 

const Multimedia4 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container className="p-3">
        <Row className="p-3 justify-content-center align-items-center">
          <Col md={8} className="text-center">
              <h1 className="text-black">Main Title</h1>
          </Col>
        </Row>
        <Row className="no-gutters">
            <Col md={6}>
                <img
                  className="d-block w-100 h-100"
                  src={animal2}
                  alt="First slide"
                />   
            </Col>
            <Col md={6}>
                <img
                  className="d-block w-100"
                  src={animal2}
                  alt="First slide"
                />
                <img
                  className="d-block w-100"
                  src={animal2}
                  alt="First slide"
                />
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Multimedia4;
