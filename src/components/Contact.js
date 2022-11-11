import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";

const Contact = () => {
  return (
    <div>
      <div className="navigation">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="Contact">
        <Container>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit metus
          condimentum fusce proin felis, cursus maecenas facilisi volutpat
          tempor. Sodales sed curae primis ante et gravida, litora magnis enim
          tellus rutrum non, dis iaculis sapien est cras. Volutpat vehicula nibh
          dignissim odio non iaculis quam, nunc ultrices eget inceptos enim
          ridiculus nisi, magnis etiam senectus dictum dis fames et, habitasse
          imperdiet interdum venenatis scelerisque vestibulum. Velit pulvinar
          facilisi porttitor curabitur risus gravida etiam mattis nostra
          ullamcorper, integer sociosqu condimentum vitae nam feugiat ligula
          massa dui sodales bibendum, congue tempor nunc nulla quisque
          pellentesque rhoncus nibh auctor. Euismod sed nec augue bibendum id
          porta torquent litora, integer interdum cras primis libero inceptos
          est, justo hac dictum tincidunt sem nostra suspendisse. Himenaeos sed
          lectus nostra vel proin diam nullam commodo orci, quisque ultrices
          sociis habitant fusce cursus venenatis neque netus, fermentum litora
          vehicula laoreet nisl in accumsan ullamcorper. Elementum sagittis
          accumsan feugiat ante cum dapibus, vestibulum torquent egestas quam
          iaculis, tristique imperdiet platea leo urna. Neque litora ac metus
          felis nascetur nibh non suspendisse, nec accumsan magnis etiam
          maecenas mattis risus faucibus, suscipit enim tortor nunc platea class
          venenatis. Pharetra class magna turpis a suspendisse morbi urna
          volutpat, laoreet pretium dui rutrum pulvinar purus. Ante ac ultrices
          integer orci sollicitudin ultricies porttitor, aliquam lectus
          convallis ut mus semper, cubilia egestas magnis class magna blandit.
          Sociosqu a mauris quam dignissim curae luctus blandit habitant
          vehicula, tempor metus convallis tristique eget cras nec parturient
          interdum, litora est cum quis eros primis ante odio. Faucibus commodo
          ante quis hendrerit quisque nisi gravida, posuere fames fusce tortor
          curabitur penatibus tristique facilisi, nullam sodales parturient hac
          etiam ullamcorper.
        </Container>
      </section>
    </div>
  );
};

export default Contact;
