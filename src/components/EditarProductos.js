import {
  Form,
  Badge,
  Row,
  Col,
  Container,
  Table,
  Button,
  InputGroup,
} from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin";

const EditarProductos = () => {
  return (
    <div>
      <NavbarAdmin />
      <Container>
        <div
          style={{
            backgroundColor: "white",
            marginTop: "50px",
            marginBottom: "50px",
            padding: "4px",
            color: "black",
          }}
        >
          <Container className="titulo-xl">EDITAR PROD</Container>
          <Row>
            <Col sm={3}>
              <div className="album py-5 bg-light">
                <div className="container">
                  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3">
                    <div className="col">
                      <div className="card shadow-sm">
                        <img src="https://saopaulosecreto.com/wp-content/uploads/2022/06/thomas-marban-EHK-EH1SRzQ-unsplash.jpg" alt="soy ciego"></img>
                        <div className="card-body">
                          <h6
                            style={{ color: "black" }}
                            className="card-text align-items-center d-flex justify-content-center"
                          >
                            Imagen
                          </h6>
                          <div className="d-grid gap-1">
                            <Button variant="primary" size="sm">
                              Cambiar
                            </Button>
                            <Button variant="danger" size="sm">
                              Eliminar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={9}>
              <div className="py-5 bg-light">
                <Container>
                  <Badge pill bg="primary">
                    Editacion
                  </Badge>{" "}
                </Container>
                <Container
                  style={{ paddingTop: "1.5%", paddingBottom: "1.5%" }}
                >
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th> ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 3 </td>
                        <td>
                          <InputGroup className="mb-0" size="sm">
                            <InputGroup.Text id="basic-addon1">
                              Nombre
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="name"
                              aria-label="name"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <Form.Select
                            aria-label="Default select example"
                            size="sm"
                          >
                            <option> Categoria </option>
                            <option value="1"> None </option>
                            <option value="2"> Inari</option>
                            <option value="3"> Temaki </option>
                            <option value="4"> Nigiri </option>
                          </Form.Select>
                        </td>
                        <td>
                          <InputGroup className="mb-0" size="sm">
                            <InputGroup.Text>Precio $</InputGroup.Text>
                            <Form.Control
                              placeholder="price"
                              aria-label="Amount (to the nearest dollar)"
                            />
                          </InputGroup>
                        </td>
                        <td>
                          <InputGroup className="mb-0" size="sm">
                            <InputGroup.Text id="basic-addon1">
                              Descripcion
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="description"
                              aria-label="description"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={{ paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                    <Row>
                      <Col sm={8}>
                        <Table bordered hover>
                          <tbody>
                            <tr>
                              <td>
                                <InputGroup className="mb-0" size="sm">
                                  <InputGroup.Text id="basic-addon1">
                                    URL
                                  </InputGroup.Text>
                                  <Form.Control
                                    placeholder="url-img"
                                    aria-label="url-img"
                                    aria-describedby="basic-addon1"
                                  />
                                </InputGroup>
                              </td>
                              <td>
                                <Form.Select
                                  aria-label="Default select example"
                                  size="sm"
                                >
                                  <option> Visibilidad </option>
                                  <option value="1"> Activa </option>
                                  <option value="2"> Desactivada </option>
                                </Form.Select>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col sm={4}>
                        <Table bordered hover>
                          <thead></thead>
                          <tbody>
                            <tr>
                              <td>
                                <InputGroup className="mb-0" size="sm">
                                  <InputGroup.Text>Stock</InputGroup.Text>
                                  <Form.Control
                                    placeholder="?"
                                    aria-label="Amount (to the nearest dollar)"
                                  />
                                </InputGroup>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Row>
                      <Col>
                        <a href="/" className="text-reset">
                          atrás
                        </a>
                      </Col>
                      <Col>
                        <Button variant="success">Guardar Cambios</Button>{" "}
                        <Button variant="danger">Cancelar</Button>{" "}
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default EditarProductos;
