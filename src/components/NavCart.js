import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const NavCart = ({ name, description, price, img }) => {
  return (
    <div
      className="d-flex justify-content-start"
      style={{ margin: "4px", padding: "3px" }}
    >
      <div style={{ padding: "6px" }} className="card">
        <div className="row">
          <div className="col-md-5">
            <img src={img} alt={name} className="img-fluid" />
          </div>
          <div className="col-md-7">
            <h3
              style={{ fontWeight: "bold" }}
              className="card-title mt-1 mb-0 text-black"
            >
              {name}
            </h3>
            <Row>
              <Col style={{ color: "black" }}>
                <ListGroup.Item style={{ paddingBottom: "1px" }}>
                  categoria
                </ListGroup.Item>
                <ListGroup.Item
                  className="lh-1"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "1px",
                  }}
                >
                  {description}
                </ListGroup.Item>
              </Col>
              <Col style={{ paddingRight: "5%", color: "black" }}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <ListGroup.Item>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {price}
                    </p>
                  </ListGroup.Item>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <ListGroup.Item
                    className="mt-2 mb-1 text-black"
                    style={{
                      fontSize: "12px",
                      fontWeight: "lighter",
                    }}
                  >
                    Cant:
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <ButtonGroup size="sm">
                      <Button>-</Button>
                      <Button variant="info">0</Button>
                      <Button>+</Button>
                    </ButtonGroup>{" "}
                  </ListGroup.Item>
                  <a href="/" className="text-reset mt-1">
                    eliminar
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCart;
