import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.svg"

const Navigation = () => {
  return (
    <div className="navigation">
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col md="auto">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="justify-content-md-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="menu">Menu</Nav.Link>
              <Nav.Link href="contact">Contacto</Nav.Link>
              <Nav.Link href="about">Acerca</Nav.Link>
            </Nav>
          </Col>
          <Col md="auto">
            <Button href="login" variant="dark">
              Iniciar sesión
            </Button>
            <Button href="signup" variant="dark">
              Registrarse
            </Button>
            <a href="cart"><img src={cart} alt="Carrito de compra" /></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
