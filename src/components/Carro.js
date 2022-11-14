import { Tab, Placeholder, Container, Dropdown, DropdownButton, Row, Col, Card, Button, ButtonGroup, InputGroup, Form, ListGroup, Nav, ListGroupItem } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
import products from "../mocking/products";
import CartProduct from "./CartProduct";
import logo from "../assets/img/logo.png";
import webpay from "../assets/img/webpay.png";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Carro() {
    return (
        <>
            <Navigation />
            <div className="contenedor-uno">
                <Row>
                    <Col >
                        {[
                            'Primary',
                            'Secondary',
                            'Success',
                            'Danger',
                            'Warning',
                            'Info',
                            'Light',
                            'Dark',
                        ].map((variant) => (
                            <div className="d-flex justify-content-start" style={{ margin: "4px", padding: "3px" }}>
                                <div style={{ padding: "6px" }} class="card">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img src={logo} class="img-fluid" />
                                        </div>
                                        <div class="col-md-10">
                                            <h3 style={{ fontWeight: "bold" }} class="card-title mt-2 mb-0 text-black">
                                                SAKI
                                            </h3>
                                            <Row>
                                                <Col style={{ color: "black" }}>
                                                    <ListGroup.Item style={{ paddingBottom: "1px" }} >
                                                        California
                                                    </ListGroup.Item>
                                                    <ListGroup.Item class="lh-1" style={{ fontSize: "12px", paddingBottom: "1px" }} >
                                                        Arroz, alga, palta, queso crema, sesamo.
                                                    </ListGroup.Item>
                                                </Col>
                                                <Col style={{ paddingRight: "5%", color: "black" }}>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                        <ListGroup.Item>
                                                            <p style={{ fontSize: "20px", fontWeight: "bold" }} >
                                                                $5.990
                                                            </p>
                                                        </ListGroup.Item>
                                                    </div>
                                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                        <ListGroup.Item class="mt-1 mb-1 text-black" style={{ fontSize: "12px", fontWeight: "lighter" }}>
                                                            Cantidad:
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>                                                  <ButtonGroup size="sm">
                                                            <Button>-</Button>
                                                            <Button variant="info" >0</Button>
                                                            <Button>+</Button>
                                                        </ButtonGroup> </ListGroup.Item>
                                                        <a href="#" class="text-reset">
                                                            eliminar
                                                        </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Col >
                    <Col className="rcorners3" style={{ margin: "4px", padding: "40px" }}>
                        <div className="rcorners2 checkout">
                            <Card style={{ width: '27rem' }}>
                                <CardHeader>
                                    Detalles Compra
                                </CardHeader>
                                <Card.Body>
                                    <Card.Title>
                                        <div>
                                            <Row>
                                                <Col>
                                                    Total
                                                </Col>
                                                <Col style={{ textAlign: "right" }}>
                                                    $ 0.00
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Title>
                                    <Card.Text>
                                        <div>
                                            <Row>
                                                <Col>
                                                    Subtotal:
                                                </Col>
                                                <Col style={{ textAlign: "right" }}>
                                                    $ 0.00
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush mb-5">
                                    <ListGroup.Item>
                                        <InputGroup className="mb-0">
                                            <Form.Select aria-label="Default select example">
                                                <option>Despacho standar (gratis)</option>
                                                <option value="1">Despacho 1</option>
                                                <option value="2">Despacho 2</option>
                                                <option value="3">Despacho 3</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Card.Text>
                                            <div>
                                                <Row>
                                                    <Col>
                                                        Cantidad total productos:
                                                    </Col>
                                                    <Col style={{ textAlign: "right" }}>
                                                        0
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card.Text>
                                        <div className="d-grid gap-1 mt-5 mb-4">
                                            <Button variant="primary" size="sm" active>
                                                Confirmar Pago
                                            </Button>{' '}
                                            <Button variant="danger" size="sm" active>
                                                Cancelar
                                            </Button>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Metodo Pago:
                                        <div>
                                            <img className="img-fluid" src={webpay}></img>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body style={{ textAlign: "right" }}>
                                    <Card.Link href="#">Link 1</Card.Link>
                                    <Card.Link href="#">Link 2</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
}

export default Carro;