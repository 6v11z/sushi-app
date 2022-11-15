import { Col, Card, Button, ListGroup } from "react-bootstrap";

const ProductoDestacado = ({name, img, description, price}) => {
  return (
    <div className="col-lg-3 d-flex align-items-stretch">
      <Col sm>
        <Card
          className="text-black"
          style={{ width: "18rem", padding: "1%", marginBottom: "20px" }}
        >
          <Card.Img
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>categoria</Card.Text>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {description}
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-center">
                <b>{price}</b>
              </ListGroup.Item>
            </ListGroup>

            <div className="d-flex justify-content-center">
              <Button variant="primary">Añadir al carro</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProductoDestacado;
