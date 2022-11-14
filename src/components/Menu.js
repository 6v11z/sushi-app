import Navigation from "./Navigation";
import Product from "./Product";
import Footer from "./Footer";
import products from "../mocking/products";
import { Container, Row, Col, Card, Button, ListGroup, } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navigation/>
      <div className="contenedor-uno">
        <Row xs={2} md={5} className="g-3">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
              <Card className="text-black" style={{ padding: "1%" }}>
                <Card.Img variant="top" src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557" />
                <Card.Body>
                  <Card.Title>SUSHI</Card.Title>
                  <h6> Categoria </h6>
                  <small className="text-muted">Descripcion</small>
                  <Card.Footer>
                    <ListGroup.Item className="d-flex justify-content-center">
                      Precio
                    </ListGroup.Item>
                    <div className="d-flex justify-content-center" >
                      <Button variant="primary" size="sm"> Añadir carro </Button>
                    </div>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer/>
    </div>
  );
};

export default Menu;
