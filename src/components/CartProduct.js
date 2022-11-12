import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CartProduct = ({ img, name, description, price }) => {
  const [contador, setContador] = useState(1);

  console.log(price * contador);
  return (
    <>
    <Col xs={12} md={8} style={{ fontSize: "10px", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
         {/* Contenedor lista productos carro */}
        <Container>
          <Row style={{ padding: "20px" }}>
            <Col xs={6}>
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src= { img }/>
                <Card.Body>
                  <Card.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
                    { name }
                  </Card.Title>
                  <Card.Text> { description }</Card.Text>
                  <div
                    class="btn-group" role="group" aria-label="Basic example"
                  >
                    <Button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setContador(contador - 1)}
                    >
                      -
                    </Button>
                    <Button type="button" className="btn btn-secondary">
                      {contador}
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setContador(contador + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button variant="link" size="sm">
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <p
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  margin: "0px",
                }}
              >
                {`$${price}`}
              </p>
              <p>Precio normal</p>
            </Col>
          </Row>
        </Container>

        {/* Contenedor lista productos carro */}

      </Col>

    </>
  );
};

export default CartProduct;

