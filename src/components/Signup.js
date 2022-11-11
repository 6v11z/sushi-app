import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/logo.png";
// import { useState } from "react";

const Signup = () => {
  // const [newRUT, setNewRUT] = useState("")
  // const [newNombre, setNewNombre] = useState("")
  // const [newDireccion, setNewDireccion] = useState("")
  // const [newComuna, setNewComuna] = useState("")
  // const [newProvincia, setNewProvincia] = useState("")
  // const [newRegion, setNewRegion] = useState("")
  // const [newFechaNacimiento, setNewFechaNacimiento] = useState("")
  // const [newSexo, setNewSexo] = useState("")
  // const [newNumeroTelefonico, setNewNumeroTelefonico] = useState("")
  // const [newCorreo, setNewCorreo] = useState("")
  // const [newContraseña, setNewContraseña] = useState("")

  return (
    <div className="login">
      <div className="navigation">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-end">
              <p>¿Ya tienes una cuenta? <a href="login">Iniciar sesión</a></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicRUT">
                  <Form.Label>RUT</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicNombreCompleto"
                >
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicComuna">
                  <Form.Label>Comuna</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicProvincia">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicRegión">
                  <Form.Label>Región</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicFechaNacimiento"
                >
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicSexo">
                  <Form.Label>Sexo</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicNumeroTelefonico"
                >
                  <Form.Label>Número Telefónico</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCorreoElectronico"
                >
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nunca compartiremos tu correo electrónico con nadie"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>

            <div className="mb-3 d-flex flex-column">
              <Button variant="success">Crear cuenta</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
