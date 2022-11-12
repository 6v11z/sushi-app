import Navigation from "./Navigation";
import Product from "./Product";
import Footer from "./Footer";
import products from "../mocking/products";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navigation>
      </Navigation>

      <Container
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 50,
          paddingTop: 50,
        }}>

        <div class="container">
          <div class="row">
            <div class="col-lg-3 d-flex align-items-stretch">
              <Card className="text-black" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    California.
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-center">
                      <b>
                        Precio
                      </b>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-flex justify-content-center" >
                    <Button variant="primary">
                      Añadir al carro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-3 d-flex align-items-stretch">
              <Card className="text-black" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    California.
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-center">
                      <b>
                        Precio
                      </b>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-flex justify-content-center" >
                    <Button variant="primary">
                      Añadir al carro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-3 d-flex align-items-stretch">
              <Card className="text-black" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    California.
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-center">
                      <b>
                        Precio
                      </b>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-flex justify-content-center" >
                    <Button variant="primary">
                      Añadir al carro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col-lg-3 d-flex align-items-stretch">
              <Card className="text-black" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    California.
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-center">
                      <b>
                        Precio
                      </b>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="d-flex justify-content-center" >
                    <Button variant="primary">
                      Añadir al carro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>


      </Container>

      <Footer>
      </Footer>
    </div>
  );
};

export default Menu;
