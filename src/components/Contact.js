import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <section className="Contact">
        <Container>
          contactanos:
          <ul>
            <li> Tel 1: 227864963</li>
            <li> Tel 2: 226751853</li>
          </ul>
          whatsApp
          <ul>
            <li> +56922796608</li>
            <li> +56986928402</li>
            <li> +56956442907</li>
          </ul>
          Redes Sociales
          <ul>
            <li> facebook @fukusukesushi.M</li>
            <li> instagram @fukusukesushi.M</li>
          </ul>
          locacion
          <ul>
            <li> AV pajaritos 1001, Maipu</li>
          </ul>
        </Container>
        <div className="d-flex justify-content-center">
          <div className="conta">
            <img
              src="https://www.merca2.es/wp-content/uploads/2019/07/facebook-instagram-whatsapp.jpg"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
