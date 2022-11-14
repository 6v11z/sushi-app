import Navigation from "./Navigation";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import uno from "../assets/img/carrousel_1.jpg";
import dos from "../assets/img/carrousel_2.jpg";
import tres from "../assets/img/carrousel_3.jpg";


const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={uno}
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
              src={dos}
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
              src={tres}
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

      <div className="contenedor-uno">

        <Row className="gradientes">
          <Col sm={8} style={{ padding: "1rem" }} >
            <b className="titulo-prueba"> PRODUCTOS DESTACADOS </b>
          </Col>
          <Col sm={4} style={{ padding: "1rem" }} >
            <b className="titulo-prueba"> TEXTO </b>
          </Col>
        </Row>

        <Row style={{ padding: "1rem" }}>
          <Col sm>
            


            
            <Card className="text-black" className="text-black" style={{ width: "18rem", padding: "1%", marginBottom: "20px" }}>
              <Card.Img variant="top"
                src="https://assets.niusushi.cl/production/images/8faf2953-4d42-4f1f-a594-e04e764e7b58/medium/tori-tempurajpg-254.jpg?1453915557"/>
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






          </Col>
          <Col sm>

            <Card className="text-black" className="text-black" style={{ width: "18rem", padding: "1%", marginBottom: "20px" }}>
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
          </Col>
          <Col sm>
            <Card className="text-black" className="text-black" style={{ width: "18rem", padding: "1%", marginBottom: "20px" }}>
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
          </Col>
          <Col sm>
            <Card className="text-black" className="text-black" style={{ width: "18rem", padding: "1%", marginBottom: "20px" }}>
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
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Home;
