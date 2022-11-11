import Container from "react-bootstrap/Container";
import logo from "../assets/img/logo.png";
import Navigation from "./Navigation";

const About = () => {
  return (
    <div>
      <Navigation /> 
      <section className="about">
        <Container>
          hola, somo una empresa familiar que se enfoca en la venta de sushi,
          estamos ubicado en la comuna de maipu, nuestra empresa busca brindar
          un buen servicio tanto en sabor de nuestros productos como en la
          atencion a los clientes, contamos con cuatro años de experiencia en
          este rubro y podemos afirmar que nuestros productos estan hechos con
          la mas alta calidad de estandares en los productos que se utilizan
          para su armado, te dejamos invitados a consumir nuestros productos y
          pasar un buen momento en conpañia de tus cercanos y con una rica
          comida.
        </Container>
        <div className="d-flex justify-content-center">
          <img src={logo} alt="logo" />
        </div>
      </section>
    </div>
  );
};

export default About;
