import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Card className="text-center text-black">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <Card.Title>Acerca de</Card.Title>
        <Card.Text>
          <Container>
            <Row style={{fontSize:"40px", fontWeight:"bold"}}>
              <Col>Fukusuke Sushi</Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row style={{fontSize:"20px", fontWeight:"bold"}}>
              <Col>LINKS</Col>
              <Col>CONTACTO</Col>
              <Col>REDES</Col>
            </Row>
            <Row>
              <Col>Link1</Col>
              <Col>Contacto 1</Col>
              <Col>Instagram</Col>
            </Row>
            <Row>
              <Col>Link2</Col>
              <Col>Contacto 2</Col>
              <Col>Facebook</Col>
            </Row>
            <Row>
              <Col>Link3</Col>
              <Col>Contacto 3</Col>
              <Col>WhasApp</Col>
            </Row>
            <Row>
              <Col><br></br></Col>
              <Col><br></br></Col>
              <Col><br></br></Col>
            </Row>
            <Row>
              <Col>Texto 1</Col>
              <Col>Texto 2</Col>
              <Col>
                <Button><BsInstagram /></Button>
                <Button><BsFacebook /></Button>
                <Button><BsInstagram /></Button>
                <Button><BsFacebook /></Button>
              </Col>
            </Row>
            <Row>
              <Col>.</Col>
              <Col>
                <Container style={{ paddingLeft: 120, paddingRight: 120, paddingBottom: 0 }}>
                  <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.xROw_0ALkZTMnT094q-U9AHaDZ?pid=ImgDet&rs=1" class="img-thumbnail"
                    alt="Second slide"
                  />
                </Container>
              </Col>
              <Col>.</Col>
            </Row>
          </Container>

        </Card.Text>
        <Button variant="primary">Registrarse</Button>
      </Card.Body>
      <Card.Footer className="text-muted">copyright © 2022 all rights reserved</Card.Footer>
    </Card>
  );
};

export default Footer;