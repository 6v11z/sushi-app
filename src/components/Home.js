import Navigation from "./Navigation";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sushitown.cl/images/Banner_1_nuevo-01-compressor.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sushitown.cl/images/Banner_1_nuevo-01-compressor.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sushitown.cl/images/Banner_1_nuevo-01-compressor.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 50,
          paddingTop: 50,
        }}
      >
        <Row>
          <Col sm={8}>PRODUCTOS DESTACADOS</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>
            <Card className="text-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Precio</ListGroup.Item>
                  <ListGroup.Item>Categoria</ListGroup.Item>
                  <ListGroup.Item>Descripcion </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            
            <Card className="text-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Precio</ListGroup.Item>
                  <ListGroup.Item>Categoria</ListGroup.Item>
                  <ListGroup.Item>Descripcion </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Precio</ListGroup.Item>
                  <ListGroup.Item>Categoria</ListGroup.Item>
                  <ListGroup.Item>Descripcion </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-black" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Precio</ListGroup.Item>
                  <ListGroup.Item>Categoria</ListGroup.Item>
                  <ListGroup.Item>Descripcion </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
