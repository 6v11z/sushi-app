import { Col, Row, Container, Stack, Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { BsWhatsapp, BsInstagram, BsFacebook, BsMap } from "react-icons/bs";
import izq from "../assets/img/MapContact.jpg";


const Contact = () => {
  return (

    <div>
      <Navigation />

      <div class="contenedor-contacto">
        <Row>

          <Col>
            <img src={izq} class="img-responsive" width="120%" height="100%"></img>
          </Col>

          <Col style={{ backgroundColor: "rgb(50, 1, 3)" }}>
            <Col style={{ padding: "6%" }}>
              <Container style={{
                paddingTop: "5%",
                paddingBottom: "5%"
              }}>
                <h2 className="titulo-2">
                  Let's talk
                </h2>
                <Stack style={{ paddingTop: "5%", paddingBottom: "5%" }} gap={1}>
                  <h4> Redes sociales: </h4>
                  <a>  <BsWhatsapp /> Whatsapp </a>
                  <ul>
                    <li> +56 9 2279 6608</li>
                    <li> +56 9 8692 8402</li>
                    <li> +56 9 5644 2907</li>
                  </ul>
                  <a> <BsInstagram /> Instagram </a>
                  <ul>
                    <li> @fukusukesushi.M</li>
                  </ul>
                  <a> <BsFacebook /> Facebook </a>
                  <ul>
                    <li> @fukusukesushi.M</li>
                  </ul>
                  <a> <BsMap /> Locación </a>
                  <ul>
                    <li> Av. Pajaritos 1001, Maipu.</li>
                  </ul>
                </Stack>
                <Stack gap={1}>
                  <h5>o suscribete con tu correo! </h5>
                </Stack>
                <Stack direction="horizontal" gap={2}>
                  <Form.Control className="me-auto" placeholder="Correo electronico aqui..." />
                  <Button variant="primary">Subscribirse</Button>
                  <div className="vr" />
                  <Button variant="light">Quitar</Button>
                </Stack>
                <Stack style={{ paddingTop: "8%", paddingBottom: "5%" }} gap={2} className="col-md-5 mx-auto">
                  <Button variant="primary">Inicio</Button>
                  <Button variant="danger">Registrarse</Button>
                </Stack>
              </Container>

              <Container>
                <p class="text-ligth">
                  IMPSUM
                </p>
              </Container>
            </Col>
          </Col>

        </Row>
      </div>

      <Footer />
    </div>

  );
};

export default Contact;
