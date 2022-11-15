import Navigation from "./Navigation";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import uno from "../assets/img/carrousel_1.jpg";
import dos from "../assets/img/carrousel_2.jpg";
import tres from "../assets/img/carrousel_3.jpg";
import destacados from "../mocking/destacados";
import ProductoDestacado from "./ProductoDestacado";
const Home = () => {
  return (
    <>
      <Navigation cartProducts={[]}/>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={uno} alt="Second slide" />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dos} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={tres} alt="Third slide" />

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
          <Col sm={8} style={{ padding: "1rem" }}>
            <b className="titulo-prueba"> PRODUCTOS DESTACADOS </b>
          </Col>
          <Col sm={4} style={{ padding: "1rem" }}>
            <b className="titulo-prueba"> TEXTO </b>
          </Col>
        </Row>

        <Row style={{ padding: "1rem" }}>
          {destacados.map((destacado) => (
            <ProductoDestacado
              key={destacado.id}
              name={destacado.name}
              price={destacado.price}
              img={destacado.img}
              description={destacado.description}
            />
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Home;
