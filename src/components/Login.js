import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../assets/img/logo.png";

const Login = () => {
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
          </Row>
        </Container>
      </div>
      <div className="main">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" />
            <Form.Text className="text-muted">
              Nunca compartiremos tu correo electrónico con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <div className="mb-3 d-flex flex-column">
            <Button variant="success">Iniciar sesión</Button>
          </div>
          <p className="mb-3">
            <a href="signup">Crear cuenta</a>
          </p>
          <p className="mb-3">
            <a href="forgot_password">Olvide mi contraseña</a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
